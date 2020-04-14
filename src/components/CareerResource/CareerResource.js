import React from "react";
import "./CareerResource.css";
import { makeStyles } from "@material-ui/styles";
import { TableRow, TableCell } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  resourceName: {
    fontWeight: "bold",
    textAlign: "right"
  }
}));

export default function CareerResource(props) {
  if (props.resource.date != null) {
    return <Event resource={props.resource} />;
  }

  return (
    <TableRow hover key={props.resource.id}>
      <TableCell className={useStyles.resourceName}>
        {props.resource.name}
      </TableCell>
      <TableCell className="hide-sm">{props.resource.description}</TableCell>
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
    <TableCell className="hide-sm">{props.resource.description}</TableCell>
    <TableCell className="hide-sm">{props.resource.location}</TableCell>
    <TableCell>
      <a href={props.resource.link}>{props.resource.link}</a>
    </TableCell>
  </TableRow>
);
