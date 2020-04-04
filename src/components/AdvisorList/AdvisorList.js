import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Advisor from "../Advisor/Advisor";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 5,
    backgroundColor: "#E5E5E5",
    maxWidth: 300,
    minHeight: 525
  },
  inner: {
    maxWidth: 290,
    padding: 10
  },
  nameContainer: {
    display: "flex",
    alignItems: "center"
  },
  cell: {
    backgroundColor: "white"
  },
  text: {
    fontWeight: "bold"
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: "flex-end"
  },
  next: {
    alignitems: "right"
  }
}));

export default function AdvisorList(props) {
  const classes = useStyles();
  return (
    <div className="advisorList">
      <Card className={classes.content}>
        <CardContent>
          <h3>
            <strong>Staff</strong>{" "}
          </h3>
          <Table className={classes.inner}>
            {props.advisors.map(advisor => (
              <Advisor advisor={advisor} />
            ))}
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
