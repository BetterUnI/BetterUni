import React from "react";
import { shallow } from "enzyme";
import Advisor from "./Advisor";

describe("Advisor Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<Advisor />);
    console.log(component.debug());
    const wrapper = component.find(".advisor");
    expect(wrapper.length).toBe(1);
  });
});
