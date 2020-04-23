import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MeetingsCalendar = props => {
  const { meetings } = props;

  let userMeetings = [];
  meetings.forEach(meeting => {
    console.log("meeeeeeeting: ", meeting);
    userMeetings.push({
      title: meeting.reasonForMeeting,
      start: new Date(meeting.startTime),
      end: new Date(meeting.endTime)
    });
  });

  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        views={["month", "week", "day"]}
        defaultView="month"
        events={userMeetings}
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
};

export default MeetingsCalendar;
