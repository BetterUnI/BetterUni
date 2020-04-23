import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import { SchedulePageContext } from "../../SchedulePageContext";
import { gapi } from "gapi-script";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { API, graphqlOperation } from "aws-amplify";
import { createMeeting as CreateMeeting } from "../../graphql/mutations";

import "react-big-calendar/lib/css/react-big-calendar.css";

// TODO once ClickedAdvisorContext is created: const advisorUser = useContext(ClickedAdvisorContext);
async function createMeeting(
  studentUser,
  advisorUser,
  startTime,
  endTime,
  reasonForMeeting
) {
  return await gapi.client
    .load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
    .then(
      function() {
        console.log("GAPI client loaded for API");
        var request = gapi.client.calendar.events.insert({
          calendarId: "primary",
          sendUpdates: "all", // sends email invite to attendees of event
          resource: {
            summary: reasonForMeeting,
            location: "1801 N. Broad Street, Philadelphia, PA 19122",
            description: reasonForMeeting,
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
        });

        request.execute(function(resp) {
          console.log("response: ", resp);
          // GraphQL mutation to store new meeting event as meeting in DynamoDB Meetings table for student and advisor users
          const createGraphQLMeetingForStudent = async () => {
            try {
              const newMeeting = await API.graphql(
                graphqlOperation(CreateMeeting, {
                  input: {
                    date: startTime, // this is redundant but a required field for the current way our GraphQL API is indexed with fields in our DynamoDB
                    startTime: startTime,
                    endTime: endTime,
                    reasonForMeeting: reasonForMeeting,
                    meetingUserId: studentUser.id,
                    meetingAdvisorUserId: advisorUser.id
                  }
                })
              );
              console.log(
                "GraphQL newMeeting for student created in Meeting DynamoDB table: ",
                newMeeting
              );
              return newMeeting;
            } catch (err) {
              console.log(
                "Error in the GraphQL mutation for creating a new meeting for a student: ",
                err
              );
            }
          };

          const createGraphQLMeetingForAdvisor = async () => {
            try {
              const newMeeting = await API.graphql(
                graphqlOperation(CreateMeeting, {
                  input: {
                    date: startTime, // this is redundant but a required field for the current way our GraphQL API is indexed with fields in our DynamoDB
                    startTime: startTime,
                    endTime: endTime,
                    reasonForMeeting: reasonForMeeting,
                    meetingUserId: advisorUser.id,
                    meetingAdvisorUserId: studentUser.id
                  }
                })
              );
              console.log(
                "GraphQL newMeeting for advisor created in Meeting DynamoDB table: ",
                newMeeting
              );
              return newMeeting;
            } catch (err) {
              console.log(
                "Error in the GraphQL mutation for creating a new meeting for an advisor: ",
                err
              );
            }
          };

          createGraphQLMeetingForStudent();
          createGraphQLMeetingForAdvisor();
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
  const schedulePageContext = useContext(SchedulePageContext);
  const advisorUser = schedulePageContext.selectedAdvisor;

  const handleSelect = ({ start, end }) => {
    const reasonForMeeting = window.prompt("Reason for Meeting");
    if (reasonForMeeting) {
      setEvents(
        events.concat({
          start,
          end,
          reasonForMeeting
        })
      );

      // Formats the Date object to RFC3339 which is used by Google APIs
      const formattedStartTime = start.toISOString();
      const formattedEndTime = end.toISOString();

      createMeeting(
        studentUser,
        advisorUser,
        formattedStartTime,
        formattedEndTime,
        reasonForMeeting
      );
    } else {
      return; // student cancelled event creation
    }
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
          width: "90vw",
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
