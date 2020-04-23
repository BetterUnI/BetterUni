import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  content: {
    maxWidth: 300,
    fontWeight: "bold"
  }
}));

export default function HomeInfoListItem(props) {
  const classes = useStyles();

  return (
    <TableRow hover key={props.name}>
      <TableCell className={classes.content}>{props.homeList.name}</TableCell>
    </TableRow>
  );
}
