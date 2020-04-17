import React, { useEffect } from "react";
import { gapi } from "gapi-script";

var event = {
  summary: "Test Event",
  location: "1801 N. Broad Street, Philadelphia, PA 19122",
  description: "An event for testing purposes",
  start: {
    dateTime: "2020-04-16T20:38:00+00:00",
    timeZone: "America/New_York"
  },
  end: {
    dateTime: "2020-04-16T21:00:00+00:00",
    timeZone: "America/New_York"
  },
  // Attendees to send an email invite to (the advisor)
  attendees: [
    {
      email: "studentemail.com",
      displayName: "studentname"
    },
    {
      email: "advisoremail.com",
      displayName: "advisorname"
    }
  ],
  // Sends email notification to organizer of event (student that scheduled meeting)
  reminders: {
    useDefault: false,
    overrides: [
      { method: "email", minutes: 1440 }, // 1 day before meeting
      { method: "email", minutes: 120 } // 2 hours before meeting
    ]
  }
};

async function createGoogleEvent() {
  return await gapi.client
    .load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
    .then(
      function() {
        console.log("GAPI client loaded for API");
        var request = gapi.client.calendar.events.insert({
          calendarId: "primary",
          sendUpdates: "all", // sends email invite to attendees of event
          resource: event
        });

        request.execute(function(resp) {
          console.log("response: ", resp);
          // TODO: Store new event as meeting in Meetings table for specific user
        });
      },
      function(err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}

export default function SchedulerCalendar() {
  useEffect(() => {
    createGoogleEvent();
  }, []);
  return <div></div>;
}
