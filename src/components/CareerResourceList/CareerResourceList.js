import React from "react";
import "./CareerResourceList.css";

import { makeStyles } from "@material-ui/styles";
import {
  Card,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";

import CareerResource from "../../components/CareerResource/CareerResource";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: "flex",
    alignItems: "center"
  },
  iconCenterAlignment: {
    textAlign: "center"
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: "flex-end"
  },
  tableHead: {
    backgroundColor: "black"
  }
}));

export default function CareerResourceList(props) {
  if (props.isEvent) {
    return <CareerEventList resourceList={props.resourceList} />;
  }
  return <ResourceList resourceList={props.resourceList} />;
}

const CareerEventList = props => (
  <div className="careerEventList">
    <h3>
      <strong>Upcoming Career Events</strong>
    </h3>
    <Card className={useStyles.content}>
      <Table className={useStyles.inner}>
        <TableHead className={useStyles.tableHead}>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Date</TableCell>
            <TableCell className="hide-sm">Description</TableCell>
            <TableCell className="hide-sm">Location</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.resourceList.map(resource => (
            <CareerResource
              key={resource.id}
              resource={resource}
              isEvent={true}
            />
          ))}
        </TableBody>
      </Table>
    </Card>
  </div>
);

const ResourceList = props => (
  <div className="resourceList">
    <h3>
      <strong>Career Resources</strong>
    </h3>
    <Card className={useStyles.content}>
      <Table className={useStyles.inner}>
        <TableHead>
          <TableRow>
            <TableCell>Resource</TableCell>
            <TableCell className="hide-sm">Description</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.resourceList.map(resource => (
            <CareerResource key={resource.id} resource={resource} />
          ))}
        </TableBody>
      </Table>
    </Card>
  </div>
);
