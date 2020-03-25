import React from "react";
import { shallow } from "enzyme";
import AdvisorList from "./AdvisorList";

describe("AdvisorList Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<AdvisorList />);
    console.log(component.debug());
    const wrapper = component.find(".advisorList");
    expect(wrapper.length).toBe(1);
  });
});
