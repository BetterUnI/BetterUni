import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { makeStyles } from "@material-ui/styles";
import HomeInfoList from "../../components/HomeInfoList/HomeInfoList";
const useStyles = makeStyles(theme => ({
  content: {
    display: "inline-block",
    width: "100%"
  },
  page: {
    backgroundColor: "#9D2235",
    color: "#FFFFFF",
    fontFamily: "Arial"
  }
}));

const offices = [
  {
    title: "CST Advising"
  },
  {
    title: "Counseling"
  },
  {
    title: "Career Center"
  },
  {
    title: "Tutoring"
  },
  {
    title: "Writing Center"
  },
  {
    title: "Student Health Services"
  },
  {
    title: "Fox Advising"
  },
  {
    title: "Engineering Advising"
  },
  {
    title: "Klein Advising"
  },
  {
    title: "Boyer Advising"
  }
];

const event = [
  {
    title: "Career Fair"
  },
  {
    title: "Resume Review Workshop"
  },
  {
    title: "Penn Hackathon"
  },
  {
    title: "Vanguard Networking Event"
  }
];
const meeting = [
  {
    time: "9 AM",
    title: "Sarah Parker"
  },
  {
    time: "9 AM",
    title: "Jack Doe"
  },
  {
    time: "9 AM",
    title: "Jane Smith"
  },
  {
    time: "9 AM",
    title: "Dr Lasname"
  }
];
export function HomePage() {
  const user = useContext(UserContext);

  const classes = useStyles();
  return (
    <>
      <br></br>
      <div className={classes.page}>
        <center>
          <br></br>
          <h1>Welcome to BetterUni</h1>
          <img src="images/bulogo.png" width="100" height="100"></img>
          <h2>We aim to provide you the tools, opportunities,</h2>
          <h2> and resources to succeed at Temple Univeristy and beyond</h2>
        </center>
        <br></br>
      </div>
      <br></br>
      <div className={classes.content}>
        <HomeInfoList listTitle="Advising Offices" offices={offices} />
        <HomeInfoList listTitle="Career Events" offices={event} />
        <HomeInfoList listTitle="Upcoming Meetings" offices={meeting} />
      </div>
    </>
  );
}
