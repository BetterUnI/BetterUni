import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

import MeetingsCalendar from "../../components/MeetingsCalendar/MeetingsCalendar";

export function ProfilePage() {
  const user = useContext(UserContext);
  const userMeetings = user.meetings.items;

  return (
    <>
      <h1>Meeting Calendar</h1>
      <MeetingsCalendar meetings={userMeetings} />
    </>
  );
}
