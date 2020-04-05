import React from "react";
import { makeStyles } from "@material-ui/styles";
import AdvisingOfficeList from "../../components/AdvisingOfficeList/AdvisingOfficeList";

const useStyles = makeStyles(theme => ({
  content: {
    display: "inline-block",
    width: "100%"
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

export function HomePage() {
  const classes = useStyles();

  return (
    <>
      <h1>Home page</h1>
      <p>This is the home page</p>
      <div className={classes.content}>
        <AdvisingOfficeList offices={offices} />
        <AdvisingOfficeList offices={offices} />
        <AdvisingOfficeList offices={offices} />
      </div>
    </>
  );
}
