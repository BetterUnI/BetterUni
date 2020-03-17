import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { SignIn, withAuthenticator } from "aws-amplify-react";

const signUpConfig = {
  hiddenDefaults: ["username", "email"],
  signUpFields: [
    {
      label: "Email",
      key: "username",
      required: true,
      displayOrder: 1,
      type: "email",
      custom: false
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
      custom: false
    }
  ]
};

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.authState === "signedIn") {
      return (
        <div>
          <h1>Internal app inaccessible unless user is signed in :)</h1>
        </div>
      );
    } else {
      return null;
    }
  }
}

// export default withAuthenticator(
//   App,
//   true,
//   [MySignIn],
//   null,
//   MyTheme,
//   signUpConfig
// );
export default App;
