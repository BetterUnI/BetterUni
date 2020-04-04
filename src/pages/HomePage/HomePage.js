import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

export function HomePage() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Home page</h1>
      <h2>
        Current user name is {user.firstName} {user.lastName}
      </h2>
      <p>This is the home page</p>
    </>
  );
}
