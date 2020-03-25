import React from "react";
import { shallow } from "enzyme";
import CategoryList from "./CategoryList";

describe("CategoryList Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<CategoryList />);
    console.log(component.debug());
    const wrapper = component.find(".categoryList");
    expect(wrapper.length).toBe(1);
  });
});
