import React from "react";
import AdvisorList from "../../components/AdvisorList/AdvisorList";
import CategoryList from "../../components/CategoryList/CategoryList";

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

const categories = [
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
  }
];

export function SchedulePage() {
  return (
    <>
      <h1>Schedule page</h1>
      <p>This is the schedule page</p>
      <CategoryList categories={categories} />
      <AdvisorList advisors={advisors} />
    </>
  );
}
