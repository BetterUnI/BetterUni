import React from "react";
import { shallow } from "enzyme";
import AdvisingOffice from "./AdvisingOffice";

describe("AdvisingOffice Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<AdvisingOffice />);
    console.log(component.debug());
    const wrapper = component.find(".advisingOffice");
    expect(wrapper.length).toBe(1);
  });
});
