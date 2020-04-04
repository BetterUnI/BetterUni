import React from "react";
import { makeStyles } from "@material-ui/styles";
import Advisor from "../Advisor/Advisor";

import { Card, CardContent, Table } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 5,
    backgroundColor: "#E5E5E5",
    maxWidth: 300,
    maxHeight: 525
  },
  inner: {
    maxWidth: 290,
    padding: 10
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

export default function AdvisorList(props) {
  const classes = useStyles();
  return (
    <div className="advisorList">
      <Card className={classes.content}>
        <CardContent>
          <h3>
            <strong>Staff</strong>{" "}
          </h3>
          <Table className={classes.inner}>
            {props.advisors.map(advisor => (
              <Advisor advisor={advisor} />
            ))}
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
