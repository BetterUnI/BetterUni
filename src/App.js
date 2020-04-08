// /* eslint-disable */
import React, { useEffect, useState } from "react";
import "./App.css";
import { UserContext } from "./UserContext";
import axios from "axios";

// Routing imports
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";

// AWS Amplify and GraphQL imports
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser as GetUser } from "./graphql/queries";
import { createUser as CreateUser } from "./graphql/mutations";

// Material UI imports
import { CircularProgress } from "@material-ui/core";

// CometChat API imports
import { CometChat } from "@cometchat-pro/chat";

const cometChatConfig = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(process.env.REACT_APP_COMETCHAT_REGION)
  .build();
CometChat.init(process.env.REACT_APP_COMETCHAT_APP_ID, cometChatConfig).then(
  () => {
    console.log("CometChat initialization completed successfully!");
  },
  error => {
    console.log("CometChat initialization failed with error: ", error);
  }
);

const headers = {
  "Content-Type": "application/json",
  appid: process.env.REACT_APP_COMETCHAT_APP_ID,
  apikey: process.env.REACT_APP_COMETCHAT_API_KEY
};

const browserHistory = createBrowserHistory();

// this function will fetch token
const requestAuthToken = uid => {
  return new Promise((resolve, reject) => {
    axios
      .post(`https://api-us.cometchat.io/v2.0/users/${uid}/auth_tokens`, null, {
        headers
      })
      .then(response => {
        console.log("New Auth Token:", response.data);
        resolve(response.data.data);
      })
      .catch(error => reject(error));
  });
};

async function createUserInDB(user) {
  const userAlreadyInDB = await API.graphql(
    graphqlOperation(GetUser, { id: user.attributes["custom:tuid"] })
  );

  if (userAlreadyInDB.data.getUser === null) {
    // Create new user
    // If AWS Cognito user has a major, they are a student
    if (user.attributes["custom:major"]) {
      // Create student
      try {
        const newStudentUser = await API.graphql(
          graphqlOperation(CreateUser, {
            input: {
              id: user.attributes["custom:tuid"],
              firstName: user.attributes["custom:firstName"],
              lastName: user.attributes["custom:lastName"],
              email: user.attributes["email"],
              major: user.attributes["custom:major"],
              isAdvisor: false
            }
          })
        );

        // Create new CometChat user
        const newCCUser = {
          uid: newStudentUser.data.createUser.id,
          name: newStudentUser.data.createUser.firstName
        };

        axios
          .post(
            "https://api-us.cometchat.io/v2.0/users",
            JSON.stringify(newCCUser),
            { headers }
          )
          .then(function(response) {
            console.log("Created new CometChat User: ", response);
            // user is created, fetch auth token
            requestAuthToken(response.data.data.uid)
              .then(authToken => {
                console.log("Success:" + JSON.stringify(authToken));
                // TODO authToken is returned to client - save authToken on UserContext object
                // Log newly created student user in to CometChat
                CometChat.login(authToken).then(
                  newCometChatUser => {
                    console.log("Login successfully:", { newCometChatUser });
                    // User logged in successfully.
                  },
                  error => {
                    console.log("Login failed with exception:", { error });
                    // User login failed, check error and take appropriate action.
                  }
                );
              })
              .catch(error => console.error("Error:", error));
          })
          .catch(function(error) {
            console.log(
              "There was an error creating a new CometChat user: ",
              error
            );
          });

        return newStudentUser.data.createUser; // RETURN STUDENT
      } catch (err) {
        console.log("There was an error creating the newUser: ", err);
      }
    } else {
      // Create advisor
      const newAdvisorUser = await API.graphql(
        graphqlOperation(CreateUser, {
          input: {
            id: user.attributes["custom:tuid"],
            firstName: user.attributes["custom:firstName"],
            lastName: user.attributes["custom:lastName"],
            email: user.attributes["email"],
            isAdvisor: true
          }
        })
      );

      // Create new CometChat user
      const newCCUser = {
        uid: newAdvisorUser.data.createUser.id,
        name: newAdvisorUser.data.createUser.firstName
      };

      axios
        .post(
          "https://api-us.cometchat.io/v2.0/users",
          JSON.stringify(newCCUser),
          { headers }
        )
        .then(function(response) {
          console.log("Created new CometChat User: ", response);
          // user is created, fetch auth token
          requestAuthToken(response.data.data.uid)
            .then(authToken => {
              console.log("Success:" + JSON.stringify(authToken));
              // TODO authToken is returned to client - save authToken on UserContext object
              // Log newly created student user in to CometChat
              CometChat.login(authToken).then(
                newCometChatUser => {
                  console.log("Login successfully:", { newCometChatUser });
                  // User logged in successfully.
                },
                error => {
                  console.log("Login failed with exception:", { error });
                  // User login failed, check error and take appropriate action.
                }
              );
            })
            .catch(error => console.error("Error:", error));
        })
        .catch(function(error) {
          console.log(
            "There was an error creating a new CometChat user: ",
            error
          );
        });

      return newAdvisorUser.data.createUser; // RETURN ADVISOR
    }
  } else {
    // Return the user that's already in the DB to set user state
    console.log(
      "createUserInDB: user is in the DB already, returning that user: ",
      userAlreadyInDB.data.getUser
    );

    // Log already created CometChat user in to CometChat
    CometChat.login(
      userAlreadyInDB.data.getUser.id,
      process.env.REACT_APP_COMETCHAT_FULL_ACCESS_API_KEY
    ).then(
      cometChatUser => {
        console.log("Existing CometChat user login successful: ", {
          cometChatUser
        });
        // User logged in successfully.
      },
      error => {
        console.log("Existing CometChat user login failed with exception:", {
          error
        });
        // User login failed, check error and take appropriate action.
      }
    );

    return userAlreadyInDB.data.getUser;
  }
}

export function App(props) {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Check the current user when the App component is loaded
    if (props.authState === "signedIn") {
      Auth.currentAuthenticatedUser({ bypassCache: true })
        .then(user => {
          createUserInDB(user)
            .then(returnedUser => {
              setUser(returnedUser);
            })
            .then(
              setTimeout(() => {
                setLoading(false);
              }, 400)
            );
        })
        .catch(err =>
          console.log(
            "There was an error retrieving the currently authenticated AWS Cognito user: ",
            err
          )
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.authState]);

  if (props.authState === "signedIn" && !isLoading) {
    return (
      <Router history={browserHistory}>
        <UserContext.Provider value={user}>
          <Routes currentUser={user} />
        </UserContext.Provider>
      </Router>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CircularProgress />
      </div>
    );
  }
}

export default App;
