import React from "react";
import { shallow } from "enzyme";
import { CareerPage } from "./CareerPage";

describe("CareerPage Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<CareerPage />);
    console.log(component.debug());
    const wrapper = component.find("h1");
    expect(wrapper.length).toBe(1);
  });
});
