import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { borders } from "@material-ui/system";
import Box from "@material-ui/core/Box";

import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Typography
} from "@material-ui/core";

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
  text: {
    color: "#A41E35",
    fontWeight: "bold"
  },
  nameContainer: {
    display: "flex",
    marginRight: theme.spacing(2),
    alignItems: "center",
    justifyContent: "center"
  },
  cell: {
    backgroundColor: "white"
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
              <TableRow className={classes.tableRow} hover key={category.title}>
                <TableCell className={classes.cell}>
                  <Box
                    className={classes.nameContainer}
                    border={1}
                    borderColor="#A41E35"
                    borderRadius={4}
                    padding={1}
                  >
                    <Typography className={classes.text}>
                      {category.title}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
