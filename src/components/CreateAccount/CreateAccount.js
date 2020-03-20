import React from "react";
import { SignUp } from "aws-amplify-react";

export class CreateAccount extends SignUp {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signUp"];
  }

  showComponent() {
    return (
      <div>
        <h1>Create a new account</h1>
        <form>
          <div>
            <label htmlFor="username">Email</label>
            <input
              id="username"
              key="username"
              name="username"
              onChange={this.handleInputChange}
              type="email"
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
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                super.sortFields();
                super.validate();
                super.signUp();
              }}
            >
              Create Account
            </button>
            <p>
              Have an account?{" "}
              <span onClick={() => super.changeState("signIn")}>Sign In</span>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
