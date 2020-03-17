import React from "react";
import { ConfirmSignUp } from "aws-amplify-react";

export class ConfirmCreateAccount extends ConfirmSignUp {
  constructor(props) {
    super(props);
    this._validAuthStates = ["confirmSignUp"];
  }

  showComponent(theme) {
    return (
      <div>
        <h1>Confirm your new account</h1>
        <h2>{console.log(this.props)}</h2>
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
              value={this.props.authData.username}
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
              Lost your code? <a onClick={() => super.resend()}>Resend Code</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
