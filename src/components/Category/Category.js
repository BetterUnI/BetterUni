import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import { TableCell, TableRow } from "@material-ui/core";
import { SchedulePageContext } from "../../SchedulePageContext";

const useStyles = makeStyles(theme => ({
  root: {},
  text: {
    color: "#A41E35",
    fontWeight: "bold"
  },
  nameContainer: {
    display: "flex",
    minWidth: "100%",
    padding: "0 50",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#A41E35",
    "&:hover": {
      borderColor: "#FFFFFF"
    }
  },
  cell: {
    display: "flex",
    justifyContent: "center",
    marginRight: theme.spacing(2),
    backgroundColor: "white",
    borderRadius: 4,
    width: "100%",
    cursor: "pointer",
    color: "#A41E35",
    fontWeight: "bold",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "#FFFFFF"
    }
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
      onClick={() => setSelectedCategory(props.category)}
    >
      <TableCell className={classes.cell}>
        <Box
          className={classes.nameContainer}
          border={1}
          borderRadius={4}
          padding={1}
        >
          {props.category.name}
        </Box>
      </TableCell>
    </TableRow>
  );
}
