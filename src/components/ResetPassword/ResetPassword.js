import React from "react";
import { ForgotPassword } from "aws-amplify-react";

export class ResetPassword extends ForgotPassword {
  constructor(props) {
    super(props);
    this._validAuthStates = ["forgotPassword"];
  }

  showComponent() {
    return (
      <div>
        <h1>Reset your password</h1>
        <form>
          <h4>1. Receive a confirmation code</h4>
          <div>
            <label htmlFor="username">Email</label>
            <input
              id="username"
              key="username"
              name="username"
              onChange={this.handleInputChange}
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                super.send();
              }}
            >
              Send Code
            </button>
          </div>
          <h4>2. Use that confirmation code to change your password</h4>
          <div>
            <label htmlFor="code">Code * </label>
            <input
              id="code"
              key="code"
              name="code"
              onChange={this.handleInputChange}
              placeholder="Enter your code"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="password">New Password * </label>
            <input
              id="password"
              key="password"
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="******************"
              autoComplete="off"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                super.submit();
              }}
            >
              Submit
            </button>
            <p>
              Back to{" "}
              <span onClick={() => super.changeState("signIn")}>Sign In</span>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
