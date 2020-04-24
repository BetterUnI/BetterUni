import React from "react";
import { makeStyles } from "@material-ui/styles";
import { CircularProgress } from "@material-ui/core";
import Category from "../Category/Category";

import { Card, CardContent, Table, TableBody } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 5,
    backgroundColor: "#E5E5E5",
    minWidth: 258,
    borderRadius: 4,
    [theme.breakpoints.down("md")]: {
      minHeight: 300
    }
  },
  inner: {
    width: "100%",
    padding: 5,
    height: 400,
    overflow: "auto",
    [theme.breakpoints.up("md")]: {
      width: 300
    },
    [theme.breakpoints.down("md")]: {
      height: 200,
      minHeight: 300
    }
  },
  actions: {
    justifyContent: "flex-end"
  },
  loading: {
    margin: "0 auto"
  },
  cardContent: {
    minHeight: 475,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      minHeight: 300
    }
  }
}));

export default function CategoryList(props) {
  const classes = useStyles();
  return (
    <div className="categoryList">
      <Card className={classes.content}>
        {props.loading ? (
          <CardContent className={classes.cardContent}>
            <CircularProgress className={classes.loading} />
          </CardContent>
        ) : (
          <CardContent>
            <h3>
              <strong>Categories</strong>
            </h3>
            <div className={classes.inner}>
              <Table>
                <TableBody>
                  {props.categories.map(category => (
                    <Category key={category.name} category={category} />
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
