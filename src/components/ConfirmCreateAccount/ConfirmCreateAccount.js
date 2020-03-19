import React from "react";
import { ConfirmSignUp } from "aws-amplify-react";

export class ConfirmCreateAccount extends ConfirmSignUp {
  constructor(props) {
    super(props);
    this._validAuthStates = ["confirmSignUp"];
  }

  showComponent() {
    return (
      <div>
        <h1>Confirm your new account</h1>
        <form>
          <div>
            <label htmlFor="username">Email * </label>
            <input
              id="username"
              key="username"
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Email"
              value={
                this.props.authData.username
                  ? this.props.authData.username
                  : this.props.authData
              }
              disabled={true}
            />
          </div>
          <div>
            <label htmlFor="code">Confirmation Code * </label>
            <input
              id="code"
              key="code"
              name="code"
              autoComplete="off"
              onChange={this.handleInputChange}
              placeholder="Enter your code"
            />
          </div>
          <div>
            <button type="button" onClick={() => super.confirm()}>
              Confirm
            </button>
            <p>
              Lost your code?{" "}
              <span onClick={() => super.resend()}>Resend Code</span>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
