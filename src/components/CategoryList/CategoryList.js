import React from "react";
import { makeStyles } from "@material-ui/styles";
import Category from "../Category/Category";

import { Card, CardContent, Table } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 5,
    backgroundColor: "#E5E5E5",
    minWidth: 300,
    float: "left"
  },
  inner: {
    minWidth: 290,
    padding: 10
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

export default function CategoryList(props) {
  const classes = useStyles();
  return (
    <div className="categoryList">
      <Card className={classes.content}>
        <CardContent>
          <h3>
            <strong>Categories</strong>{" "}
          </h3>
          <Table className={classes.inner}>
            {props.categories.map(category => (
              <Category category={category} />
            ))}
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
