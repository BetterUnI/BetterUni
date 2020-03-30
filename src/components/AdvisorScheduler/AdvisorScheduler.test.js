import React from "react";
import { shallow } from "enzyme";
import AdvisorScheduler from "./AdvisorScheduler";

describe("AdvisorScheduler Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<AdvisorScheduler />);
    console.log(component.debug());
    const wrapper = component.find(".advisorScheduler");
    expect(wrapper.length).toBe(1);
  });
});
