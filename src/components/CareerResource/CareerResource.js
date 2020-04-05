import React from "react";
//import PropTypes from "prop-types";
//import { Link } from "react-router-dom";
//import PerfectScrollbar from "react-perfect-scrollbar";
//import { makeStyles } from "@material-ui/styles";
import { TableRow, TableCell } from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//   root: {},
//   content: {
//     padding: 0
//   },
//   inner: {
//     minWidth: 1050
//   },
//   nameContainer: {
//     display: "flex",
//     alignItems: "center"
//   },
//   avatar: {
//     marginRight: theme.spacing(2)
//   },
//   actions: {
//     justifyContent: "flex-end"
//   }
// }));

export default function CareerResource(props) {
  if (props.resource.date != null) {
    return <Event resource={props.resource} />;
  }
  return (
    <TableRow hover key={props.resource.id}>
      <TableCell>{props.resource.name}</TableCell>
      <TableCell>{props.resource.description}</TableCell>
      <TableCell>{props.resource.location}</TableCell>
      <TableCell>
        <a href={props.resource.link}>{props.resource.link}</a>
      </TableCell>
    </TableRow>
  );
}

const Event = props => (
  <TableRow hover key={props.resource.id}>
    <TableCell>{props.resource.name}</TableCell>
    {/*if there is a date then we know it is an event*/}
    <TableCell>{props.resource.date}</TableCell>
    <TableCell>{props.resource.description}</TableCell>
    <TableCell>{props.resource.location}</TableCell>
    <TableCell>
      <a href={props.resource.link}>{props.resource.link}</a>
    </TableCell>
  </TableRow>
);

// export default function CareerResource() {
//   return <div className="CareerResource"></div>;
// }
