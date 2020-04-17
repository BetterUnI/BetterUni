import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles(theme => ({
  content: {
    maxWidth: 200,
    fontWeight: "bold"
  }
}));

export default function HomeInfoListItem(props) {
  const classes = useStyles();

  return (
    <TableRow hover key={props.reasonForMeeting}>
      <TableCell className={classes.content}>
        {props.homelist.reasonForMeeting}
      </TableCell>
      <TableCell>
        <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
      </TableCell>
    </TableRow>
  );
}
