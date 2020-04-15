import React from "react";

import CareerResourceList from "../../components/CareerResourceList/CareerResourceList";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  title: {
    paddingLeft: 8
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: "flex-end"
  },
  page: {
    backgroundColor: "black"
  }
}));

export function CareerPage(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>
        <h1>Career Resources</h1>
        <p>
          Here at BetterUni we have a wide variety of resources to help you
          through your career path. Below is a list of links and tools that can
          help you.
        </p>
      </div>
      <CareerResourceList />
      <CareerResourceList isEvent={true} />
    </>
  );
}
