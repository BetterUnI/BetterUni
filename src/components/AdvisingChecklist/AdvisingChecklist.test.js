import React from "react";
import { shallow } from "enzyme";
import AdvisingChecklist from "./AdvisingChecklist";

describe("AdvisingChecklist Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<AdvisingChecklist />);
    console.log(component.debug());
    const wrapper = component.find(".advisingChecklist");
    expect(wrapper.length).toBe(1);
  });
});
