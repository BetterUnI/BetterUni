import React from "react";
import { shallow } from "enzyme";
import CometchatConference from "./CometchatConference";

describe("CometchatConference Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<CometchatConference />);
    console.log(component.debug());
    const wrapper = component.find(".cometchatConference");
    expect(wrapper.length).toBe(1);
  });
});
