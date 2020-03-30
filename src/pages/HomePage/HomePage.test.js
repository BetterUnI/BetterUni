import React from "react";
import { shallow } from "enzyme";
import { HomePage } from "./HomePage";

describe("HomePage Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<HomePage />);
    console.log(component.debug());
    const wrapper = component.find("h1");
    expect(wrapper.length).toBe(1);
  });
});
