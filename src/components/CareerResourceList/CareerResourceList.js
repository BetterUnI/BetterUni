import React from "react";
import "./CareerResourceList.css";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Card,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableContainer from "@material-ui/core/TableContainer";

import CareerResource from "../../components/CareerResource/CareerResource";

function populateResourceData(id, name, description, link) {
  return { id, name, description, link };
}

function populateEventData(id, name, date, location, description, link) {
  return { id, name, date, location, description, link };
}

const resourceList = [
  populateResourceData(
    0,
    "Handshake",
    "Handshake is the #1 way college students find jobs. Join today to explore career options, find jobs and internships, and connect with employers.",
    "https://temple.joinhandshake.com/"
  ),
  populateResourceData(
    4,
    "LinkedIn",
    "LinkedIn is an American business and employment-oriented service that operates via websites and mobile apps. It is mainly used for professional networking, including employers posting jobs and job seekers posting their CVs.",
    "https://www.linkedin.com"
  ),
  populateResourceData(
    5,
    "Indeed",
    "Indeed is an American worldwide employment-related search engine for job listings.",
    "https://www.linkedin.com"
  ),
  populateResourceData(
    6,
    "Advisor Scheduler",
    "At BetterUni, we have an easy to use advisor scheduler.",
    "Schedule"
  )
];

const eventList = [
  populateEventData(
    1,
    "Career Fair",
    "October 5, 2020",
    "SAC 200C",
    "Network with recruiters from over 50 different companies. Formal dress code required.",
    "https://temple.joinhandshake.com/"
  ),
  populateEventData(
    2,
    "Resume Review Workshop",
    "October 17, 2020",
    "SAC 200B",
    "Meet up with a CST advisor to get a resume review in the Student Center!",
    "https://temple.joinhandshake.com/"
  ),
  populateEventData(
    3,
    "Penn Hackathon",
    "October 23-24, 2020",
    "University of Pennsylvania",
    "Penn University is having its annual hackathon on October 23-24. Be sure to sign up on Handshake by October 7th if you wish to attend.",
    "https://temple.joinhandshake.com/"
  ),
  populateEventData(
    8,
    "Vanguard Networking Event",
    "October 26, 2020",
    "SERC 358",
    "Recruiters from Vanguard will be visiting on campus in the SERC from 12-3 PM. Bring your resume!",
    "https://temple.joinhandshake.com/"
  )
];

const useStyles = makeStyles(theme => ({
  root: {}
}));

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        className="hide-sm"
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        className="hide-sm"
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

export default function CareerResourceList(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage -
    Math.min(
      rowsPerPage,
      Math.max(eventList.length, resourceList.length) - page * rowsPerPage
    );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (props.isEvent) {
    return (
      <CareerEventList
        emptyRows={emptyRows}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        setPage={setPage}
        page={page}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    );
  }
  return (
    <ResourceList
      emptyRows={emptyRows}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      setPage={setPage}
      page={page}
      rowsPerPage={rowsPerPage}
      setRowsPerPage={setRowsPerPage}
    />
  );
}

const CareerEventList = props => (
  <div className="careerEventList">
    <h3>
      <strong>Upcoming Career Events</strong>
    </h3>
    <TableContainer>
      <Table>
        <TableHead className={useStyles.tableHead}>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Date</TableCell>
            <TableCell className="hide-sm">Description</TableCell>
            <TableCell className="hide-sm">Location</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(props.rowsPerPage > 0
            ? eventList.slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
            : eventList
          ).map(resource => (
            <CareerResource
              key={resource.id}
              resource={resource}
              isEvent={true}
            />
          ))}
        </TableBody>
        <PaginationFooter
          handleChangePage={props.handleChangePage}
          handleChangeRowsPerPage={props.handleChangeRowsPerPage}
          setPage={props.setPage}
          page={props.page}
          rowsPerPage={props.rowsPerPage}
          setRowsPerPage={props.setRowsPerPage}
          isEvent={true}
        />
      </Table>
    </TableContainer>
  </div>
);

const ResourceList = props => (
  <div className="resourceList">
    <h3>
      <strong>Career Resources</strong>
    </h3>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Resource</TableCell>
            <TableCell className="hide-sm">Description</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(props.rowsPerPage > 0
            ? resourceList.slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
            : resourceList
          ).map(resource => (
            <CareerResource key={resource.id} resource={resource} />
          ))}
        </TableBody>
        <PaginationFooter
          handleChangePage={props.handleChangePage}
          handleChangeRowsPerPage={props.handleChangeRowsPerPage}
          setPage={props.setPage}
          page={props.page}
          rowsPerPage={props.rowsPerPage}
          setRowsPerPage={props.setRowsPerPage}
        />
      </Table>
    </TableContainer>
  </div>
);

const PaginationFooter = props => (
  <TableFooter>
    <TableRow>
      <TablePagination
        rowsPerPageOptions={[]}
        colSpan={3}
        count={props.isEvent ? eventList.length : resourceList.length}
        rowsPerPage={props.rowsPerPage}
        page={props.page}
        SelectProps={{
          inputProps: { "aria-label": "rows per page" },
          native: true
        }}
        onChangePage={props.handleChangePage}
        onChangeRowsPerPage={props.handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </TableRow>
  </TableFooter>
);
