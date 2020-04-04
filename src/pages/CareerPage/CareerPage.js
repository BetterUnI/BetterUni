import React from "react";

import CareerResourceList from "../../components/CareerResourceList/CareerResourceList";
//import { Table } from "@material-ui/core";

const resourceList = [
  {
    id: 0,
    name: "Dillon's Big Event",
    location: "Dillon's House, Pittsburg, PA",
    description: "Event to code some really big things",
    link: "google.com"
  },
  {
    id: 4,
    name: "Noah",
    location: "Philadelphia",
    description: "Something Something",
    link: "google.com"
  }
];

const eventList = [
  {
    id: 1,
    name: "Ariela's Career Event",
    date: "March 23, 1998",
    location: "SERC",
    description: "A really good career event with all sorts of folks.",
    link: "google.com"
  },
  {
    id: 2,
    name: "Richard's Big Event",
    date: "May 6th",
    location: "Liacouras Center",
    description: "Hooter The Owl party",
    link: "google.com"
  },
  {
    id: 3,
    name: "Davis's Big Event",
    date: "September 22, 2020",
    location: "Dillon's House, Pittsburg, PA",
    description: "We are putting music in the app",
    link: "google.com"
  }
];

//   {
//     id: 1,
//     name: "Ariella's Big Event",
//     date: "March 23, 2020",
//     location: "SERC",
//     description: "Event to code some really big things",
//     link: "google.com"
//   },
//   {
//     id: 2,
//     name: "Richard's Big Event",
//     date: "May 6th",
//     location: "Liacouras Center",
//     description: "Hooter The Owl party",
//     link: "google.com"
//   },
//   {
//     id: 3,
//     name: "Davis's Big Event",
//     date: "September 22, 2020",
//     location: "Dillon's House, Pittsburg, PA",
//     description: "We are putting music in the app",
//     link: "google.com"
//   },
//   {
//     id: 4,
//     name: "Noah",
//     location: "Philadelphia",
//     description: "Something Something",
//     link: "google.com"
//   }
// ];

export function CareerPage() {
  return (
    <>
      <h1>Career Resources</h1>
      <p>
        Here at BetterUni we have a wide variety of resources to help you
        through your career path. Below is a list of links and tools that can
        help you.
      </p>
      <CareerResourceList resourceList={resourceList} />
      <CareerResourceList resourceList={eventList} isEvent={true} />
    </>
  );
}
