import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles(theme => ({
  content: {
    minWidth: 150,
    fontWeight: "bold"
  }
}));

export default function HomeInfoListItem(props) {
  const classes = useStyles();

  return (
    <div className="homeInfoListItem">
      <TableRow hover key={props.title}>
        <TableCell className={classes.content}>{props.office.title}</TableCell>
        <TableCell>
          <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
        </TableCell>
      </TableRow>
    </div>
  );
}
