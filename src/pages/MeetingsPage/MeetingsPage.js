import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import CometchatConference from "../../components/CometchatConference/CometchatConference";

export function MeetingsPage() {
  const user = useContext(UserContext); // will use to display user's current meetings data with user.meetings array

  return (
    <>
      <h1>Meetings page</h1>
      <CometchatConference />
    </>
  );
}
