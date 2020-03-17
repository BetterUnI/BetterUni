import React from "react";
import { SignUp } from "aws-amplify-react";

export class CreateAccount extends SignUp {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signUp"];
    console.log(props);
    // this.defaultSignUpFields = [
    //   {
    //     label: "Email",
    //     key: "username",
    //     required: true,
    //     displayOrder: 1,
    //     type: "email",
    //     custom: false
    //   },
    //   {
    //     label: "Password",
    //     key: "password",
    //     required: true,
    //     displayOrder: 2,
    //     type: "password",
    //     custom: false
    //   }
    // ];
  }

  showComponent(theme) {
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
                console.log("signing up :)");
                console.log(this.props);
                console.log(super.checkCustomSignUpFields());
                super.signUp();
              }}
            >
              Create Account
            </button>
            <p>
              Have an account?{" "}
              <a onClick={() => super.changeState("signIn")}>Sign In</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
