import React from "react";

import CareerResourceList from "../../components/CareerResourceList/CareerResourceList";
import CareerEvent from "../../components/CareerEvent/CareerEvent";
import { Table } from "@material-ui/core";

export function CareerPage() {
  return (
    <>
      <h1>Career Resources</h1>
      <p>
        Here at BetterUni we have a wide variety of resources to help you
        through your career path. Below is a list of links and tools that can
        help you.
      </p>
      <CareerResourceList />
      <Table>
        <div>
          <CareerEvent
            careerEventID="1"
            name="lorem"
            date="date"
            description="description"
            location="location"
            link="google.com"
          />
        </div>
      </Table>
    </>
  );
}
