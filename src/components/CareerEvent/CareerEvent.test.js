import React from "react";
import { shallow } from "enzyme";
import CareerEvent from "./CareerEvent";

describe("CareerEvent Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<CareerEvent />);
    console.log(component.debug());
    const wrapper = component.find(".careerEvent");
    expect(wrapper.length).toBe(1);
  });
});
