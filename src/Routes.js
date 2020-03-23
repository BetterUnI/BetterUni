import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./components/RouteWithLayout/RouteWithLayout";
import { Main as MainLayout } from "./components/Main/Main";

import { HomePage as HomeView } from "./pages/HomePage/HomePage";
import { SchedulePage as ScheduleView } from "./pages/SchedulePage/SchedulePage";
import { MeetingsPage as MeetingsView } from "./pages/MeetingsPage/MeetingsPage";
import { CareerPage as CareerView } from "./pages/CareerPage/CareerPage";
import { ProfilePage as ProfileView } from "./pages/ProfilePage/ProfilePage";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={ScheduleView}
        exact
        layout={MainLayout}
        path="/schedule"
      />
      <RouteWithLayout
        component={MeetingsView}
        exact
        layout={MainLayout}
        path="/meetings"
      />
      <RouteWithLayout
        component={CareerView}
        exact
        layout={MainLayout}
        path="/career"
      />
      <RouteWithLayout
        component={ProfileView}
        exact
        layout={MainLayout}
        path="/profile"
      />
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
