import React from "react";
import { shallow } from "enzyme";
import UpcomingMeetings from "./UpcomingMeetings";

describe("UpcomingMeetings Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<UpcomingMeetings />);
    console.log(component.debug());
    const wrapper = component.find(".upcomingMeetings");
    expect(wrapper.length).toBe(1);
  });
});
