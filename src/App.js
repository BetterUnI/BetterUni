import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import CareerPage from "./pages/CareerPage/CareerPage";
import HomePage from "./pages/HomePage/HomePage";
import MeetingsPage from "./pages/MeetingsPage/MeetingsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SchedulePage from "./pages/SchedulePage/SchedulePage";

class App extends React.Component {
  render() {
    if (this.props.authState === "signedIn") {
      return (
        <Router>
          <div>
            <AppBar position="static">
              <Toolbar>
                <li>
                  <Link to="/career">Career</Link>
                </li>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/meetings">Meetings</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/schedule">Schedule</Link>
                </li>
              </Toolbar>
            </AppBar>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/career">
                <CareerPage />
              </Route>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/meetings">
                <MeetingsPage />
              </Route>
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/schedule">
                <SchedulePage />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    } else {
      return null;
    }
  }
}
export default App;
