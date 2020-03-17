import React from "react";
import { SignIn } from "aws-amplify-react";

export class Login extends SignIn {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
  }

  showComponent(theme) {
    return (
      <div>
        <h1>Login to your account</h1>
        <form>
          <div>
            <label htmlFor="username">Email</label>
            <input
              id="username"
              key="username"
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              key="password"
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="******************"
            />
            <p>
              Forgot your password?{" "}
              <a onClick={() => super.changeState("forgotPassword")}>
                Reset Password
              </a>
            </p>
          </div>
          <div>
            <button type="button" onClick={e => super.signIn(e)}>
              Login
            </button>
            <p>
              No Account?{" "}
              <a onClick={() => super.changeState("signUp")}>Create account</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
