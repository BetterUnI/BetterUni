/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { List, ListItem, Button, colors } from "@material-ui/core";
import { Auth } from "aws-amplify";
import { CometChat } from "@cometchat-pro/chat";
import { gapi } from "gapi-script";

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    "& $icon": {
      color: theme.palette.primary.main
    }
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

export const SidebarNav = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map(page => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          {page.href === "/sign-out" ? (
            <Button
              activeClassName={classes.active}
              className={classes.button}
              component={CustomRouterLink}
              to={page.href}
              onClick={() => {
                // Sign user out of our application
                Auth.signOut()
                  .then(data =>
                    console.log("User successfully signed out of BetterUni!")
                  )
                  .catch(err => console.log(err));
                // Sign out user from CometChat
                CometChat.logout().then(
                  () => {
                    // CometChat logout completed successfully
                    console.log(
                      "CometChat user logout completed successfully!"
                    );
                  },
                  error => {
                    // CometChat logout failed with exception
                    console.log(
                      "CometChat user logout failed with exception: ",
                      { error }
                    );
                  }
                );
                gapi.auth2
                  .getAuthInstance()
                  .signOut()
                  .then(res => console.log("Google user signed out"))
                  .catch(err => console.log(err));
              }}
            >
              <div className={classes.icon}>{page.icon}</div>
              {page.title}
            </Button>
          ) : (
            <Button
              activeClassName={classes.active}
              className={classes.button}
              component={CustomRouterLink}
              to={page.href}
            >
              <div className={classes.icon}>{page.icon}</div>
              {page.title}
            </Button>
          )}
        </ListItem>
      ))}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};
