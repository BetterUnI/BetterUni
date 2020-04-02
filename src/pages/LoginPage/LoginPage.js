import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../theme";

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
      signUpFields: [
        {
          label: "TUID",
          key: "custom:tuid",
          type: "string",
          custom: true
        },
        {
          label: "Major (if applicable)",
          key: "custom:major",
          type: "string",
          custom: true
        },
        {
          label: "First Name",
          key: "custom:firstName",
          type: "string",
          custom: true
        },
        {
          label: "Last Name",
          key: "custom:lastName",
          type: "string",
          custom: true
        },
        {
          label: "Email",
          key: "username",
          required: true,
          placeholder: "Email"
        },
        {
          label: "Password",
          key: "password",
          required: true,
          placeholder: "Password",
          type: "password"
        }
      ],
      hiddenDefaults: ["email", "phone_number"]
    };

    return (
      <ThemeProvider theme={theme}>
        <Authenticator
          hide={[SignIn, SignUp, ConfirmSignUp, ForgotPassword, Greetings]}
          signUpConfig={signUpConfig}
          amplifyConfig={config}
        >
          <Login />
          <CreateAccount
            signUpConfig={signUpConfig}
            hiddenDefaults={["email", "phone_number"]}
            signUpFields={[
              {
                label: "TUID",
                key: "custom:tuid",
                type: "string"
              },
              {
                label: "Major (if applicable)",
                key: "custom:major",
                type: "string"
              },
              {
                label: "First Name",
                key: "custom:firstName",
                type: "string"
              },
              {
                label: "Last Name",
                key: "custom:lastName",
                type: "string"
              },
              {
                label: "Email",
                key: "username",
                required: true,
                placeholder: "Email"
              },
              {
                label: "Password",
                key: "password",
                required: true,
                placeholder: "Password",
                type: "password"
              }
            ]}
          />
          <ConfirmCreateAccount />
          <ResetPassword />
          <App />
        </Authenticator>
      </ThemeProvider>
    );
  }
}

export default LoginPage;
