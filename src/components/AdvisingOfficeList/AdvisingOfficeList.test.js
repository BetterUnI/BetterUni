import React from "react";
import { shallow } from "enzyme";
import AdvisingOfficeList from "./AdvisingOfficeList";

describe("AdvisingOfficeList Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<AdvisingOfficeList />);
    console.log(component.debug());
    const wrapper = component.find(".advisingOfficeList");
    expect(wrapper.length).toBe(1);
  });
});
