import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 0,
    title: "Happy Hour",
    start: new Date(2020, 2, 3),
    end: new Date(2020, 2, 3),
    desc: "The most important meal of the day"
  },
  {
    id: 1,
    title: "Dinner",
    start: new Date(2020, 2, 12),
    end: new Date(2020, 2, 12)
  },
  {
    id: 2,
    title: "Birthday Party",
    start: new Date(2020, 2, 13),
    end: new Date(2020, 2, 13)
  },
  {
    id: 3,
    title: "Late Night Event",
    start: new Date(2020, 2, 17),
    end: new Date(2020, 2, 18)
  },
  {
    id: 4,
    title: "Late Same Night Event",
    start: new Date(2020, 2, 17),
    end: new Date(2020, 2, 17)
  },
  {
    id: 5,
    title: "Multi-day Event",
    start: new Date(2020, 2, 19),
    end: new Date(2020, 2, 22)
  },
  {
    id: 6,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3))
  },
  {
    id: 7,
    title: "Point in Time Event",
    start: new Date(),
    end: new Date()
  },
  {
    id: 8,
    title: "Video Record",
    start: new Date(2020, 2, 26),
    end: new Date(2020, 2, 26)
  },
  {
    id: 9,
    title: "Dutch Song Producing",
    start: new Date(2020, 2, 28),
    end: new Date(2020, 2, 28)
  }
];

const MeetingsCalendar = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{
          height: "70vh",
          width: "70vw",
          margin: "0 auto"
        }}
      />
    </div>
  );
};

export default MeetingsCalendar;
