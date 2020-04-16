import React from "react";
import { gapi } from "gapi-script";

var event = {
  summary: "Test Event",
  location: "800 Howard St., San Francisco, CA 94103",
  description: "An event for testing purposes",
  start: {
    dateTime: "2020-04-19T09:00:00-07:00",
    timeZone: "America/New_York"
  },
  end: {
    dateTime: "2020-04-19T17:00:00-07:00",
    timeZone: "America/New_York"
  }
};

function createGoogleEvent() {
  gapi.client
    .load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
    .then(
      function() {
        console.log("GAPI client loaded for API");
        var request = gapi.client.calendar.events.insert({
          calendarId: "primary",
          resource: event
        });

        request.execute(function(resp) {
          console.log(resp);
          // TODO: Store new event in a user's database
        });
      },
      function(err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}

export default function SchedulerCalendar() {
  console.log(createGoogleEvent());
  return <div></div>;
}
