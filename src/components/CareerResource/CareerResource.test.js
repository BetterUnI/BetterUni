import React from "react";
import { shallow } from "enzyme";
import CareerResource from "./CareerResource";

describe("CareerResource Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<CareerResource />);
    console.log(component.debug());
    const wrapper = component.find(".careerResource");
    expect(wrapper.length).toBe(1);
  });
});
