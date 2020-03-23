import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";

const browserHistory = createBrowserHistory();

export function App(props) {
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
