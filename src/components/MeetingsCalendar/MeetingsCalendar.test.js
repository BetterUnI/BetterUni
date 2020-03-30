import React from "react";
import { shallow } from "enzyme";
import MeetingsCalendar from "./MeetingsCalendar";

describe("MeetingsCalendar Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<MeetingsCalendar />);
    console.log(component.debug());
    const wrapper = component.find(".meetingsCalendar");
    expect(wrapper.length).toBe(1);
  });
});
