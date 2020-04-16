import React from "react";
import { makeStyles } from "@material-ui/styles";
import Advisor from "../Advisor/Advisor";

import { Card, CardContent, Table, TableBody } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 5,
    backgroundColor: "#E5E5E5",
    maxWidth: 300,
    maxHeight: 525
  },
  inner: {
    width: "100%",
    padding: 5,
    height: 400,
    overflow: "auto"
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
          <div className={classes.inner}>
            <Table>
              <TableBody>
                {props.advisors.map(advisor => (
                  <Advisor key={advisor.id} advisor={advisor} />
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
