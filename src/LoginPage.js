import React from "react";
import { SignIn, SignUp, ConfirmSignUp } from "aws-amplify-react";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { Login } from "./Login";
import { CreateAccount } from "./CreateAccount";
import { ConfirmCreateAccount } from "./ConfirmCreateAccount";
import App from "./App";
import { Authenticator } from "aws-amplify-react";
Amplify.configure(config);

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const signUpConfig = {
      hiddenDefaults: ["email", "phone_number"],
      signUpFields: [
        {
          label: "Email",
          key: "username",
          required: true,
          placeholder: "Email",
          displayOrder: 1
        },
        {
          label: "Password",
          key: "password",
          required: true,
          placeholder: "Password",
          type: "password",
          displayOrder: 2
        }
      ]
    };

    return (
      <div>
        <h1>Login Page Wrapper</h1>
        <Authenticator
          hide={[SignIn, SignUp, ConfirmSignUp]}
          signUpConfig={signUpConfig}
          amplifyConfig={config}
        >
          <Login />
          <CreateAccount
            signUpConfig={{
              hiddenDefaults: ["email", "phone_number"]
            }}
            signUpFields={[
              {
                label: "Email",
                key: "username",
                required: true,
                placeholder: "Email",
                displayOrder: 1
              },
              {
                label: "Password",
                key: "password",
                required: true,
                placeholder: "Password",
                type: "password",
                displayOrder: 2
              }
            ]}
            hiddenDefaults={["email", "phone_number"]}
          />
          <ConfirmCreateAccount />
          <App />
        </Authenticator>
      </div>
    );
  }
}

export default LoginPage;