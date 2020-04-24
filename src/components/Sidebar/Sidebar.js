import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ScheduleIcon from "@material-ui/icons/Schedule";
import MeetingsIcon from "@material-ui/icons/MeetingRoom";
import CareerIcon from "@material-ui/icons/Work";
import ProfileIcon from "@material-ui/icons/AccountCircle";
import SignOutIcon from "@material-ui/icons/ExitToApp";

import { SidebarNav } from "../SidebarNav/SidebarNav";
import { Profile } from "../Profile/Profile";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)"
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

export const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const user = useContext(UserContext);

  const classes = useStyles();

  const pages = [
    {
      title: "Home",
      href: "/home",
      icon: <HomeIcon />
    },
    {
      title: "Schedule",
      href: "/schedule",
      icon: <ScheduleIcon />
    },
    {
      title: "Meetings",
      href: "/meetings",
      icon: <MeetingsIcon />
    },
    {
      title: "Career",
      href: "/career",
      icon: <CareerIcon />
    },
    {
      title: "Profile",
      href: "/profile",
      icon: <ProfileIcon />
    },
    {
      title: "Sign Out",
      href: "/sign-out",
      icon: <SignOutIcon />
    }
  ];

  // If the user is an advisor, remove schedule page as an option in the SidebarNav
  if (typeof user.isAdvisor !== "undefined") {
    pages.splice(1, 1);
  }

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      className="sidebar"
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};
