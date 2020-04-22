import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import { TableCell, TableRow, Typography } from "@material-ui/core";
import { SchedulePageContext } from "../../SchedulePageContext";

const useStyles = makeStyles(theme => ({
  root: {},
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
    backgroundColor: "white",
    minWidth: 260
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

export default function Category(props) {
  const classes = useStyles();
  const { setSelectedCategory } = useContext(SchedulePageContext);

  return (
    <TableRow
      className="category"
      hover
      key={props.category.name}
      onClick={() => setSelectedCategory(props.category.name)}
    >
      <TableCell className={classes.cell}>
        <Box
          className={classes.nameContainer}
          border={1}
          borderColor="#A41E35"
          borderRadius={4}
          padding={1}
        >
          <Typography className={classes.text}>
            {props.category.name}
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
}
