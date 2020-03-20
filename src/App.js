import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button
} from "@material-ui/core";
import CareerPage from "./pages/CareerPage/CareerPage";
import HomePage from "./pages/HomePage/HomePage";
import MeetingsPage from "./pages/MeetingsPage/MeetingsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SchedulePage from "./pages/SchedulePage/SchedulePage";
const useStyles = makeStyles(theme => ({
  appbar: {
    background: "purple"
  },
  text: {
    color: "white",
    padding: 10
  }
}));
const useStylesInv = makeStyles(theme => ({
  appbar: {
    background: "white"
  },
  text: {
    color: "yellow",
    padding: 10
  }
}));
export function App(props) {
  const classes = useStyles();
  const classesInv = useStylesInv();
  console.log(props);
  if (props.authState === "signedIn") {
    return (
      <Router>
        <div>
          <AppBar position="static" className={classes.appbar}>
            <Toolbar>
              <Typography>
                <Link to="/home" className={classes.text}>
                  Home
                </Link>
              </Typography>
              <Typography>
                <Link to="/career" className={classes.text}>
                  Career
                </Link>
              </Typography>
              <Typography>
                <Link to="/meetings" className={classes.text}>
                  Meetings
                </Link>
              </Typography>
              <Typography>
                <Link to="/profile" className={classes.text}>
                  Profile
                </Link>
              </Typography>
              <Typography>
                <Link to="/schedule" className={classes.text}>
                  Schedule
                </Link>
              </Typography>
              <Button className={classesInv.text}>Sign Out</Button>
            </Toolbar>
          </AppBar>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/career">
              <CareerPage />
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

export default App;
