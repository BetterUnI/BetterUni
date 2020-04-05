import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    paddingLeft: 0
  }
}));

export const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body1">
        &copy;{" "}
        <Link
          component="a"
          href="https://github.com/BetterUnI/BetterUni"
          target="_blank"
        >
          BetterUni
        </Link>
        . 2020
      </Typography>
      <Typography variant="caption">
        Created by Dillon Coffman, Ariela Pellumbi, Richard Kemmerer, Davis
        Samuel, &amp; Noah Costello
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};
