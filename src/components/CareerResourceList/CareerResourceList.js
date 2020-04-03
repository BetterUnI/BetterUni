/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

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
                  <TableCell>
                    <img src="handshake.png" width="30" height="30"></img>
                    Handshake
                    <br></br>
                  </TableCell>
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
                  <TableCell>
                    <img src="linked.png" width="30" height="30"></img>
                    <br></br>
                    LinkedIn
                  </TableCell>
                  <TableCell>
                    LinkedIn is an American business and employment-oriented
                    service that operates via websites and mobile apps. It is
                    mainly used for professional networking, including employers
                    posting jobs and job seekers posting their CVs.
                  </TableCell>
                  <TableCell>
                    <a href="https://linkedin.com"> linkedin.com </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <img src="indeed.png" width="30" height="30"></img>
                    <br></br>
                    Indeed
                  </TableCell>
                  <TableCell>
                    Indeed is an American worldwide employment-related search
                    engine for job listings.
                  </TableCell>
                  <TableCell>
                    <a href="https://indeed.com"> indeed.com </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <img src="as.png" width="30" height="30"></img>
                    <br></br>
                    Advisor Scheduler
                  </TableCell>
                  <TableCell>
                    At BetterUni, we have an easy to use advisor scheduler.
                  </TableCell>
                  <TableCell>
                    <Link to="/schedule">Schedule Page</Link>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
            <h1>Upcoming Career Events</h1>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Event</TableCell>
                  <TableCell>Date/Time</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Link</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Career Fair
                    <br></br>
                  </TableCell>
                  <TableCell>
                    October 5th 2020 <br></br> 12-4 PM
                  </TableCell>
                  <TableCell>
                    Network with recruiters from over 50 different companies.
                    Formal dress code required.
                  </TableCell>
                  <TableCell>
                    <a href="https://joinhandshake.com"> joinhandshake.com </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Resume Review</TableCell>
                  <TableCell>
                    October 17th 2020 <br></br> 5-7 PM
                  </TableCell>
                  <TableCell>
                    Meet up with a CST advisor to get a resume review in the
                    Student Center!
                  </TableCell>
                  <TableCell>
                    <a href="https://joinhandshake.com"> joinhandshake.com </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penn Hackathon</TableCell>
                  <TableCell>
                    October 23-24 2020 <br></br> ALL DAY
                  </TableCell>
                  <TableCell>
                    Penn University is having its annual hackathon on October
                    23-24. Be sure to sign up on Handshake by October 7th if you
                    wish to attend.
                  </TableCell>
                  <TableCell>
                    <a href="https://joinhandshake.com"> joinhandshake.com </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Vanguard Networking Event</TableCell>
                  <TableCell>
                    October 26h 2020 <br></br> 12-3 PM
                  </TableCell>
                  <TableCell>
                    Recruits from Vanguard will be visiting on campus in the
                    SERC from 12-3 PM! Bring your resume!
                  </TableCell>
                  <TableCell>
                    <a href="https://vanguard.com"> vanguard.com </a>
                  </TableCell>
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
