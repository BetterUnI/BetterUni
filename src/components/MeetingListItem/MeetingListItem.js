import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  content: {
    maxWidth: 300,
    fontWeight: "bold"
  }
}));

export default function MeetingListItem(props) {
  const classes = useStyles();

  const dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };

  const date = new Date(props.homeList.startTime);
  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    date
  );

  return (
    <TableRow hover key={props.id}>
      <TableCell className={classes.content}>
        <span style={{ marginBottom: 0 }}>
          {props.homeList.reasonForMeeting}
        </span>

        <br />

        <span style={{ fontSize: 12, fontWeight: "normal" }}>with </span>
        <span style={{ color: "#A41E35" }}>
          {props.homeList.advisorUser.firstName}
        </span>

        <br />

        <span style={{ fontSize: 12, fontWeight: "normal" }}>from </span>
        <span style={{ color: "#A41E35" }}>
          {props.homeList.advisorUser.advisingCategory.name}
        </span>

        <br />

        <span style={{ fontSize: 12, fontWeight: "normal" }}>on </span>
        <span style={{ color: "#A41E35" }}>{formattedDate}</span>
      </TableCell>
    </TableRow>
  );
}
