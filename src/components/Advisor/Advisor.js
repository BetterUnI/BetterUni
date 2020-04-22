import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { TableCell, TableRow, Avatar, Typography } from "@material-ui/core";
import { SchedulePageContext } from "../../SchedulePageContext";

const useStyles = makeStyles(theme => ({
  root: {},
  nameContainer: {
    display: "flex",
    alignItems: "center"
  },
  cell: {
    backgroundColor: "white",
    minWidth: 180
  },
  text: {
    fontWeight: "bold"
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: "flex-end"
  },
  next: {
    alignitems: "right"
  },
  cellNext: {
    backgroundColor: "white"
  }
}));

export default function Advisor(props) {
  const handleClick = () => {
    setSelectedAdvisor(props.advisor);
    setOpen(true);
  };

  const classes = useStyles();
  const { setSelectedAdvisor, setOpen } = useContext(SchedulePageContext);

  return (
    <TableRow
      className="advisor"
      hover
      key={props.advisor.id}
      onClick={handleClick}
    >
      <TableCell className={classes.cell}>
        <div className={classes.nameContainer}>
          <Avatar
            className={classes.avatar}
            src={
              "https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105561/126045782-vector-illustration-of-avatar-and-dummy-sign-collection-of-avatar-and-image-stock-symbol-for-web-.jpg"
            }
          ></Avatar>
          <Typography className={classes.text}>
            {props.advisor.firstName} {props.advisor.lastName}
          </Typography>
        </div>
      </TableCell>
      <TableCell className={classes.cellNext}>
        <NavigateNextIcon className={classes.next}></NavigateNextIcon>
      </TableCell>
    </TableRow>
  );
}
