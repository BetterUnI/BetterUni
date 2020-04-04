import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { borders } from "@material-ui/system";
import Box from "@material-ui/core/Box";

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
    backgroundColor: "white",
    minWidth: 180
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
  },
  cellNext: {
    backgroundColor: "white"
  }
}));

export default function Advisor(props) {
  const classes = useStyles();
  return (
    <div className="advisor">
      <TableRow className={classes.tableRow} hover key={props.advisor.id}>
        <TableCell className={classes.cell}>
          <div className={classes.nameContainer}>
            <Avatar className={classes.avatar} src={props.advisor.url}></Avatar>
            <Typography className={classes.text}>
              {props.advisor.name}
            </Typography>
          </div>
        </TableCell>
        <TableCell className={classes.cellNext}>
          <NavigateNextIcon className={classes.next}></NavigateNextIcon>
        </TableCell>
      </TableRow>
    </div>
  );
}
