import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

import MeetingsCalendar from "../../components/MeetingsCalendar/MeetingsCalendar";

export function ProfilePage() {
  // eslint-disable-next-line no-unused-vars
  const user = useContext(UserContext); // will use to display user's current meetings data with user.meetings array

  return (
    <>
      <h1>Profile page</h1>
      <p>This is the profile page</p>
      <MeetingsCalendar />
    </>
  );
}
