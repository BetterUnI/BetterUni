import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import CometchatConference from "../../components/CometchatConference/CometchatConference";

export function MeetingsPage() {
  // eslint-disable-next-line no-unused-vars
  const user = useContext(UserContext); // will use to display user's current meetings data with user.meetings array

  return (
    <>
      <CometchatConference style={{ marginTop: 20 }} />
    </>
  );
}
