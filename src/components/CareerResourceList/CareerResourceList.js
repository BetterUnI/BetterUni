import React from "react";

import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";

import CareerResource from "../../components/CareerResource/CareerResource";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050,
    height: 200,
    overflow: "auto"
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
  avatarBackgroundColor: {
    backgroundColor: "#F65B5B"
  },
  actions: {
    justifyContent: "flex-end"
  },
  tabelhead: {
    backgroundColor: "black"
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold"
  },
  position: {
    float: "left",
    paddingLeft: 30,
    paddingRight: 30
  }
}));

export default function CareerResourceList(props) {
  const classes = useStyles();
  const { className, users, ...rest } = props;
  if (props.isEvent) {
    return <CareerEventList resourceList={props.resourceList} />;
  }
  if (props.isHome) {
    return (
      <div className={classes.position}>
        <Card className={classes.content}>
          <CardHeader
            classes={{
              title: classes.headerTitle
            }}
            title="Career Resource List"
            avatar={
              <Avatar
                variant="rounded"
                className={classes.avatarBackgroundColor}
              >
                <SupervisorAccountOutlinedIcon fontSize="large" color="white" />
              </Avatar>
            }
          />
          <Divider />
          <CardContent className={classes.content}>
            <Table>
              <TableBody>Code This</TableBody>
            </Table>
          </CardContent>
          <Divider />
          <div className={classes.iconCenterAlignment}>
            <IconButton>
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
          </div>
        </Card>
      </div>
    );
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
