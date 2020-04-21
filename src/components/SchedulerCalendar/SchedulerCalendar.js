import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import { gapi } from "gapi-script";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { API, graphqlOperation } from "aws-amplify";
import { createMeeting as CreateMeeting } from "../../graphql/mutations";

import "react-big-calendar/lib/css/react-big-calendar.css";

// async function createGoogleEvent(studentUser, startTime, endTime, title) {
//   return await gapi.client
//     .load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
//     .then(
//       function() {
//         console.log("GAPI client loaded for Google Calendar API");
//         var request = gapi.client.calendar.events
//           .insert({
//             calendarId: "primary",
//             sendUpdates: "all", // sends email invite to attendees of event
//             resource: {
//               summary: title,
//               location: "1801 N. Broad Street, Philadelphia, PA 19122",
//               description: "An event for testing purposes",
//               start: {
//                 dateTime: startTime,
//                 timeZone: "America/New_York"
//               },
//               end: {
//                 dateTime: endTime,
//                 timeZone: "America/New_York"
//               },
//               // Attendees to send an email invite to (the advisor)
//               attendees: [
//                 {
//                   email: studentUser.email,
//                   displayName: `${studentUser.firstName}+${studentUser.lastName}`
//                 },
//                 {
//                   email: "advisoremail@gmail.com",
//                   displayName: "advisorname"
//                 }
//               ],
//               // Sends email notification to organizer of event (student that scheduled meeting)
//               reminders: {
//                 useDefault: false,
//                 overrides: [
//                   { method: "email", minutes: 1440 }, // 1 day before meeting
//                   { method: "email", minutes: 120 } // 2 hours before meeting
//                 ]
//               }
//             }
//           })
//           .then(() => {
//             // GraphQL code to save meeting for users
//             // TODO: Insert GraphQL API code in order to push event to Meetings table
//           });

//         request.execute(function(resp) {
//           console.log("Google Calendar response: ", resp);
//         });
//       },
//       function(err) {
//         console.error("Error loading GAPI client for API", err);
//       }
//     );
// }

// TODO once ClickedAdvisorContext is created: const advisorUser = useContext(ClickedAdvisorContext);
async function createMeeting(
  studentUser,
  advisorUser,
  startTime,
  endTime,
  title
) {
  return await gapi.client
    .load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
    .then(
      function() {
        console.log("GAPI client loaded for API");
        var request = gapi.client.calendar.events
          .insert({
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
                  email: studentUser.email,
                  displayName: `${studentUser.firstName}+${studentUser.lastName}`
                },
                {
                  email: advisorUser.email,
                  displayName: `${advisorUser.firstName}+${advisorUser.lastName}`
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
          })
          .then(async () => {
            // GraphQL code to save meeting for users
            // TODO: Insert GraphQL API code in order to push event to Meetings table
            try {
              const newMeeting = await API.graphql(
                graphqlOperation(CreateMeeting, {
                  input: {
                    // date: date
                    startTime: startTime,
                    endTime: endTime,
                    reasonForMeeting: title,
                    meetingUserId: studentUser.id,
                    meetingAdvisorUserId: advisorUser.id
                  }
                })
              );
              console.log(
                "GraphQL newMeeting created in Meeting DynamoDB table: ",
                newMeeting
              );
              return newMeeting;
            } catch (err) {
              console.log("There was an error creating a meeting: ", err);
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
  const studentUser = useContext(UserContext);
  // TODO once ClickedAdvisorContext is created: const advisorUser = useContext(ClickedAdvisorContext);
  console.log("SchedulerCalendar user: ", studentUser);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Reason for Meeting");
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
    // OLD createGoogleEvent(studentUser, formattedStartTime, formattedEndTime, title);

    // NEW once ClickedAdvisorContext is created: createMeeting(studentUser, advisorUser, formattedStartTime, formattedEndTime, title);
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
