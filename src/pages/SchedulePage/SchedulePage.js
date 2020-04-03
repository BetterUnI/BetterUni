import React from "react";
import AdvisorList from "../../components/AdvisorList/AdvisorList";

const advisors = [
  {
    id: 0,
    name: "Sarah Parker",
    advisingCategory: "CST Advising",
    url: "src/userPhotos/avatar_1.png"
  },
  {
    id: 1,
    name: "Jack Doe",
    advisingCategory: "CST Advising",
    url: "src/userPhotos/avatar_2.png"
  },
  {
    id: 2,
    name: "Jane Smith",
    advisingCategory: "CST Advising",
    url: "src/userPhotos/avatar_3.png"
  },
  {
    id: 3,
    name: "Michael Smith",
    advisingCategory: "CST Advising",
    url: "src/userPhotos/avatar_4.png"
  },
  {
    id: 4,
    name: "Maria Garcia",
    advisingCategory: "CST Advising",
    url: "src/userPhotos/avatar_5.png"
  }
];

export function SchedulePage() {
  return (
    <>
      <h1>Schedule page</h1>
      <p>This is the schedule page</p>
      <AdvisorList advisors={advisors} />
    </>
  );
}
