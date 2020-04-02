import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";

import { Auth } from "aws-amplify";

const browserHistory = createBrowserHistory();

export function App(props) {
  useEffect(() => {
    // check the current user when the App component is loaded
    Auth.currentAuthenticatedUser({ bypassCache: true })
      .then(user => Auth.userAttributes(user))
      .then(attributes => console.log(attributes))
      .catch(err => console.log(err));
  }, []);

  if (props.authState === "signedIn") {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  } else {
    return null;
  }
}

export default App;
