import React from "react";
import { shallow } from "enzyme";
import Meeting from "./Meeting";

describe("Meeting Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<Meeting />);
    console.log(component.debug());
    const wrapper = component.find(".meeting");
    expect(wrapper.length).toBe(1);
  });
});
