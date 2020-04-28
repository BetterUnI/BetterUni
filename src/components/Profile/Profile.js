import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Typography } from "@material-ui/core";
import { UserContext } from "../../UserContext";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content"
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

export const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = useContext(UserContext);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      {typeof user !== "undefined" ? (
        <>
          <Avatar
            alt={user.firstName}
            className={classes.avatar}
            component={RouterLink}
            src={user.firstName}
            to="/profile"
          />
          <Typography className={classes.name} variant="h4">
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body2">{user.major}</Typography>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};
