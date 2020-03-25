import React from "react";
import { shallow } from "enzyme";
import { MeetingsPage } from "./MeetingsPage";

describe("MeetingsPage Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<MeetingsPage />);
    console.log(component.debug());
    const wrapper = component.find("h1");
    expect(wrapper.length).toBe(1);
  });
});
