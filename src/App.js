import React, { useEffect, useState } from "react";
import "./App.css";
import { UserContext } from "./UserContext";

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";

import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser as GetUser } from "./graphql/queries";
import { createUser as CreateUser } from "./graphql/mutations";
import { CircularProgress } from "@material-ui/core";

const browserHistory = createBrowserHistory();

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
      return newAdvisorUser.data.createUser; // RETURN ADVISOR
    }
  } else {
    // Return the user that's already in the DB to set user state
    console.log(
      "createUserInDB: user is in the DB already, returning that user"
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
            .then(setLoading(false));
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
