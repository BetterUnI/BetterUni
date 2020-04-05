import React from "react";

import CareerResourceList from "../../components/CareerResourceList/CareerResourceList";
//import { Table } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";

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
  }
}));

const resourceList = [
  {
    id: 0,
    name: "Dillon's Big Event",
    location: "Dillon's House, Pittsburg, PA",
    description: "Event to code some really big things",
    link: "https://www.google.com"
  },
  {
    id: 4,
    name: "Noah",
    location: "Philadelphia",
    description: "Something Something",
    link: "https://www.google.com"
  }
];

const eventList = [
  {
    id: 1,
    name: "Ariela's Career Event",
    date: "March 23, 1998",
    location: "SERC",
    description: "A really good career event with all sorts of folks.",
    link: "https://www.google.com"
  },
  {
    id: 2,
    name: "Richard's Big Event",
    date: "May 6th",
    location: "Liacouras Center",
    description: "Hooter The Owl party",
    link: "https://www.google.com"
  },
  {
    id: 3,
    name: "Davis's Big Event",
    date: "September 22, 2020",
    location: "Dillon's House, Pittsburg, PA",
    description: "We are putting music in the app",
    link: "https://www.google.com"
  }
];

export function CareerPage(props) {
  const { className, users, ...rest } = props;
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
      <Card {...rest} className={clsx(classes.root, className)}>
        <PerfectScrollbar>
          <CareerResourceList resourceList={resourceList} />
          <CareerResourceList resourceList={eventList} isEvent={true} />
        </PerfectScrollbar>
      </Card>
    </>
  );
}
