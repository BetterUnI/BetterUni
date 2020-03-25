import React from "react";
import { shallow } from "enzyme";
import { SchedulePage } from "./SchedulePage";

describe("SchedulePage Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<SchedulePage />);
    console.log(component.debug());
    const wrapper = component.find("h1");
    expect(wrapper.length).toBe(1);
  });
});
