import React from "react";

import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
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
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: "flex-end"
  },
  tabelhead: {
    backgroundColor: "black"
  }
}));

export default function CareerResourceList(props) {
  const { className, users, ...rest } = props;
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
        <TableHead className={useStyles.tabelhead}>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.resourceList.map(resource => (
            <CareerResource resource={resource} isEvent={true} />
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
            <TableCell>Description</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.resourceList.map(resource => (
            <CareerResource resource={resource} />
          ))}
        </TableBody>
      </Table>
    </Card>
  </div>
);
