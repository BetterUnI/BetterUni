import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from "@material-ui/core";

import getInitials from "../../helpers/getInitials";

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
  }
}));

const CareerResourceList = props => {
  const { className, users, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = event => {
    const { users } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = users.map(user => user.id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Resource</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Link</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Handshake</TableCell>
                  <TableCell>
                    Handshake is the #1 way college students find jobs. Join
                    today to explore career options, find jobs and internships,
                    and connect with employers.
                  </TableCell>
                  <TableCell>
                    <a href="https://joinhandshake.com"> joinhandshake.com </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>LinkedIn</TableCell>
                  <TableCell>
                    LinkedIn is an American business and employment-oriented
                    service that operates via websites and mobile apps. It is
                    mainly used for professional networking, including employers
                    posting jobs and job seekers posting their CVs.
                  </TableCell>
                  <TableCell>Test</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Indeed</TableCell>
                  <TableCell>
                    Indeed is an American worldwide employment-related search
                    engine for job listings.
                  </TableCell>
                  <TableCell>Test</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Advisor Scheduler</TableCell>
                  <TableCell>
                    At BetterUni, we have an easy to use advisor scheduler.
                  </TableCell>
                  <TableCell>Test</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}></CardActions>
    </Card>
  );
};

CareerResourceList.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default CareerResourceList;
