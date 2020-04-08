import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TableRow, TableCell } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles(theme => ({
  root: {},
  resourceName: {
    fontWeight: "bold",
    textAlign: "right"
  }
}));

export default function CareerResource(props) {
  const classes = useStyles();
  /*
  if (props.resource.date != null) {
    return (
      //return <Event resource={props.resource} />;
      <div className="careerResource">
        <TableRow hover key={props.name}>
          <TableCell className={classes.content}>
            {props.resource.name}
          </TableCell>
          <TableCell>
            <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
          </TableCell>
        </TableRow>
      </div>
    );
  }
  */
  if (props.resource.date != null) {
    return <Event resource={props.resource} />;
  }

  return (
    <TableRow hover key={props.resource.id}>
      <TableCell className={useStyles.resourceName}>
        {props.resource.name}
      </TableCell>
      <TableCell>{props.resource.description}</TableCell>
      <TableCell>
        <a href={props.resource.link}>{props.resource.link}</a>
      </TableCell>
    </TableRow>
  );
}

const Event = props => (
  <TableRow hover key={props.resource.id}>
    <TableCell className={useStyles.resourceName}>
      {props.resource.name}
    </TableCell>
    {/*if there is a date then we know it is an event*/}
    <TableCell>{props.resource.date}</TableCell>
    <TableCell>{props.resource.description}</TableCell>
    <TableCell>{props.resource.location}</TableCell>
    <TableCell>
      <a href={props.resource.link}>{props.resource.link}</a>
    </TableCell>
  </TableRow>
);
