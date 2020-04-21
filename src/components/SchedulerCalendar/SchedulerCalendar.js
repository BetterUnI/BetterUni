import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

async function createGoogleEvent(startTime, endTime, title) {
  return await gapi.client
    .load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
    .then(
      function() {
        console.log("GAPI client loaded for API");
        var request = gapi.client.calendar.events.insert({
          calendarId: "primary",
          sendUpdates: "all", // sends email invite to attendees of event
          resource: {
            summary: title,
            location: "1801 N. Broad Street, Philadelphia, PA 19122",
            description: "An event for testing purposes",
            start: {
              dateTime: startTime,
              timeZone: "America/New_York"
            },
            end: {
              dateTime: endTime,
              timeZone: "America/New_York"
            },
            // Attendees to send an email invite to (the advisor)
            attendees: [
              {
                email: "studentemail@gmails.com",
                displayName: "studentname"
              },
              {
                email: "advisoremail@gmail.com",
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
          }
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
  const [events, setEvents] = useState([]);
  const localizer = momentLocalizer(moment);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title)
      setEvents(
        events.concat({
          start,
          end,
          title
        })
      );

    // Formats the Date object to RFC3339 which is used by Google APIs
    const formattedStartTime = start.toISOString();
    const formattedEndTime = end.toISOString();
    console.log("Start time is ", formattedStartTime);
    console.log("End time is ", formattedEndTime);

    // Creates Google Calendar event
    createGoogleEvent(formattedStartTime, formattedEndTime, title);

    // TODO: Insert GraphQL API code in order to push event to Meetings table
  };

  return (
    <div>
      <Calendar
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        views={["week", "day"]}
        defaultView="week"
        events={events}
        onSelectSlot={handleSelect}
        style={{
          height: "70vh",
          width: "70vw",
          margin: "0 auto",
          padding: "5px 5px 5px 5px"
        }}
        eventPropGetter={event => ({
          style: {
            backgroundColor: "#A41E35",
            border: "#A41E35"
          }
        })}
      />
    </div>
  );
}
