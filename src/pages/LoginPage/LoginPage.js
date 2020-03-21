import React from "react";
import {
  SignIn,
  SignUp,
  ConfirmSignUp,
  ForgotPassword,
  Greetings
} from "aws-amplify-react";
import App from "../../App";
import { Authenticator } from "aws-amplify-react";
import Amplify from "aws-amplify";
import config from "../../aws-exports";

import { Login } from "../../components/Login/Login";
import { CreateAccount } from "../../components/CreateAccount/CreateAccount";
import { ConfirmCreateAccount } from "../../components/ConfirmCreateAccount/ConfirmCreateAccount";
import { ResetPassword } from "../../components/ResetPassword/ResetPassword";

Amplify.configure(config);

class LoginPage extends React.Component {
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
        <Authenticator
          hide={[SignIn, SignUp, ConfirmSignUp, ForgotPassword, Greetings]}
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
          <ResetPassword />
          <App />
        </Authenticator>
      </div>
    );
  }
}

export default LoginPage;
