import React from "react";
import { shallow } from "enzyme";
import Category from "./Category";

describe("Category Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<Category />);
    console.log(component.debug());
    const wrapper = component.find(".category");
    expect(wrapper.length).toBe(1);
  });
});
