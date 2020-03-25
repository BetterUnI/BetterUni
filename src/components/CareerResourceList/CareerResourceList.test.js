import React from "react";
import { shallow } from "enzyme";
import CareerResourceList from "./CareerResourceList";

describe("CareerResourceList Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<CareerResourceList />);
    console.log(component.debug());
    const wrapper = component.find(".careerResourceList");
    expect(wrapper.length).toBe(1);
  });
});
