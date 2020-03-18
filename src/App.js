import React from "react";
import "./App.css";

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

export default App;
