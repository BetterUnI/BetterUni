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
import {
  createUser as CreateUser,
  updateUser as UpdateUser
} from "./graphql/mutations";

// Material UI imports
import { CircularProgress } from "@material-ui/core";

// CometChat API imports
import { CometChat } from "@cometchat-pro/chat";

const cometChatConfig = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(process.env.REACT_APP_COMETCHAT_REGION)
  .build();

async function initCometChat() {
  return await CometChat.init(
    process.env.REACT_APP_COMETCHAT_APP_ID,
    cometChatConfig
  ).then(
    () => {
      console.log("CometChat initialization completed successfully!");
    },
    error => {
      console.log("CometChat initialization failed with error: ", error);
    }
  );
}

const headers = {
  "Content-Type": "application/json",
  appId: process.env.REACT_APP_COMETCHAT_APP_ID,
  apikey: process.env.REACT_APP_COMETCHAT_API_KEY
};

const browserHistory = createBrowserHistory();

// This function will make a POST request to generate a new CometChat auth token
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

// Creates new BetterUni user in our DynamoDB database or fetches the already created user
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

        // POST request to CometChat to create a new CometChat
        const newCCUserResponse = await axios.post(
          "https://api-us.cometchat.io/v2.0/users",
          JSON.stringify(newCCUser),
          { headers }
        );

        // Newly created CometChat user is returned - Request to generate a CometChat auth token
        const ccUserGeneratedAuthToken = await requestAuthToken(
          newCCUserResponse.data.data.uid
        );
        console.log(
          "Successfully requested new authToken from CometChat:" +
            JSON.stringify(ccUserGeneratedAuthToken)
        );

        // Generated CometChat authToken is returned to client - save CometChat authToken to user in database
        const userCometChatAuthToken = ccUserGeneratedAuthToken.authToken;
        console.log("userCometChatAuthToken: ", userCometChatAuthToken);

        const updatedUserWithCCAuthToken = await API.graphql(
          graphqlOperation(UpdateUser, {
            input: {
              id: newStudentUser.data.createUser.id,
              cometChatAuthToken: userCometChatAuthToken
            }
          })
        );
        console.log(
          "newUpdatedUser with AUTH TOKEN: ",
          updatedUserWithCCAuthToken.data.updateUser
        );
        const newUserCometChatAuthToken =
          updatedUserWithCCAuthToken.data.updateUser.cometChatAuthToken;
        console.log(
          "NEW USER COMETCHAT AUTH TOKEN: ",
          newUserCometChatAuthToken
        );

        // Log newly created student user in to CometChat
        const loggedInCCUser = await CometChat.login(newUserCometChatAuthToken);
        console.log("Login successfully:", { loggedInCCUser });

        // Return updated student user from DynamoDB database
        return updatedUserWithCCAuthToken.data.updateUser; // RETURN STUDENT
      } catch (err) {
        console.log("There was an error creating the newUser: ", err);
      }
    } else {
      try {
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

        // POST request to CometChat to create a new CometChat
        const newCCUserResponse = await axios.post(
          "https://api-us.cometchat.io/v2.0/users",
          JSON.stringify(newCCUser),
          { headers }
        );

        // Newly created CometChat user is returned - Request to generate a CometChat auth token
        const ccUserGeneratedAuthToken = await requestAuthToken(
          newCCUserResponse.data.data.uid
        );
        console.log(
          "Successfully requested new authToken from CometChat:" +
            JSON.stringify(ccUserGeneratedAuthToken)
        );

        // Generated CometChat authToken is returned to client - save CometChat authToken to user in database
        const userCometChatAuthToken = ccUserGeneratedAuthToken.authToken;
        console.log("userCometChatAuthToken: ", userCometChatAuthToken);

        const updatedUserWithCCAuthToken = await API.graphql(
          graphqlOperation(UpdateUser, {
            input: {
              id: newAdvisorUser.data.createUser.id,
              cometChatAuthToken: userCometChatAuthToken
            }
          })
        );
        console.log(
          "newUpdatedUser with AUTH TOKEN: ",
          updatedUserWithCCAuthToken.data.updateUser
        );
        const newUserCometChatAuthToken =
          updatedUserWithCCAuthToken.data.updateUser.cometChatAuthToken;
        console.log(
          "NEW USER COMETCHAT AUTH TOKEN: ",
          newUserCometChatAuthToken
        );

        // Log newly created student user in to CometChat
        const loggedInCCUser = await CometChat.login(newUserCometChatAuthToken);
        console.log("Login successfully:", { loggedInCCUser });

        // Return updated advisor user from DynamoDB database
        return updatedUserWithCCAuthToken.data.updateUser; // RETURN ADVISOR
      } catch (err) {
        console.log("There was an error creating the newUser: ", err);
      }
    }
  } else {
    // Return the user that's already in the DB to set user state
    console.log(
      "createUserInDB: user is in the DB already, returning that user: ",
      userAlreadyInDB.data.getUser
    );

    // If the CometChat user is already logged in, don't call the CometChat login() function
    CometChat.getLoggedinUser().then(user => {
      if (user === null) {
        // TODO Log the user in using their authToken saved in our database
        CometChat.login(userAlreadyInDB.data.getUser.cometChatAuthToken).then(
          cometChatUser => {
            console.log("Existing CometChat user login successful: ", {
              cometChatUser
            });
            // User logged in successfully.
          },
          error => {
            console.log(
              "Existing CometChat user login failed with exception:",
              {
                error
              }
            );
            // User login failed, check error and take appropriate action.
          }
        );
      } else {
        console.log("cometchat user already logged in: ", user);
      }
    });

    return userAlreadyInDB.data.getUser;
  }
}

export function App(props) {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Check the current user when the App component is loaded
    if (props.authState === "signedIn") {
      // Initialize CometChat
      initCometChat();

      // Fetch currently authenticated user from database and create them in database if they're a new user
      Auth.currentAuthenticatedUser({ bypassCache: true })
        .then(async user => {
          const returnedUser = await createUserInDB(user);
          setUser(returnedUser);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
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

  if (props.authState === "signedIn" && isLoading === false) {
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
