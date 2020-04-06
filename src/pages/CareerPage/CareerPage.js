import React from "react";

import CareerResourceList from "../../components/CareerResourceList/CareerResourceList";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  title: {
    paddingLeft: 8
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
  },
  page: {
    backgroundColor: "black"
  }
}));

const resourceList = [
  {
    id: 0,
    name: "Handshake",
    description:
      "Handshake is the #1 way college students find jobs. Join today to explore career options, find jobs and internships, and connect with employers.",
    link: "https://temple.joinhandshake.com/"
  },
  {
    id: 4,
    name: "LinkedIn",
    description:
      "LinkedIn is an American business and employment-oriented service that operates via websites and mobile apps. It is mainly used for professional networking, including employers posting jobs and job seekers posting their CVs.",
    link: "https://www.linkedin.com"
  },
  {
    id: 5,
    name: "Indeed",
    description:
      "Indeed is an American worldwide employment-related search engine for job listings.",
    link: "https://www.linkedin.com"
  },
  {
    id: 6,
    name: "Advisor Scheduler",
    description: "At BetterUni, we have an easy to use advisor scheduler.",
    link: "Schedule"
  }
];

const eventList = [
  {
    id: 1,
    name: "Career Fair",
    date: "October 5, 2020",
    location: "SAC 200C",
    description:
      "Network with recruiters from over 50 different companies. Formal dress code required.",
    link: "https://temple.joinhandshake.com/"
  },
  {
    id: 2,
    name: "Resume Review Workshop",
    date: "October 17, 2020",
    location: "SAC 200B",
    description:
      "Meet up with a CST advisor to get a resume review in the Student Center!",
    link: "https://temple.joinhandshake.com/"
  },
  {
    id: 3,
    name: "Penn Hackathon",
    date: "October 23-24, 2020",
    location: "University of Pennsylvania",
    description:
      "Penn University is having its annual hackathon on October 23-24. Be sure to sign up on Handshake by October 7th if you wish to attend.",
    link: "https://temple.joinhandshake.com/"
  },
  {
    id: 8,
    name: "Vaguard Networking Event",
    date: "October 26, 2020",
    location: "SERC 358",
    description:
      "Recruiters from Vanguard will be visiting on campus in the SERC from 12-3 PM. Bring your resume!",
    link: "https://temple.joinhandshake.com/"
  }
];

export function CareerPage(props) {
  const { className, users, ...rest } = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>
        <h1>Career Resources</h1>
        <p>
          Here at BetterUni we have a wide variety of resources to help you
          through your career path. Below is a list of links and tools that can
          help you.
        </p>
      </div>
      <CareerResourceList resourceList={resourceList} />
      <CareerResourceList resourceList={eventList} isEvent={true} />
    </>
  );
}
