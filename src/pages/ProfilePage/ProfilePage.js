import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

import MeetingsCalendar from "../../components/MeetingsCalendar/MeetingsCalendar";

export function ProfilePage() {
  const user = useContext(UserContext);
  let userMeetings;
  if (typeof user !== "undefined") {
    if (user.meetings) {
      userMeetings = user.meetings.items;
    }
  }

  return (
    <>
      <h1>Meeting Calendar</h1>
      {typeof user !== "undefined" ? (
        <>
          <MeetingsCalendar meetings={userMeetings} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
