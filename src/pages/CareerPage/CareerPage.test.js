import React from "react";
import { shallow } from "enzyme";
import { CareerPage } from "./CareerPage";

describe("CareerPage Component", () => {
  test("Renders two CareerResourceList components", () => {
    const wrapper = shallow(<CareerPage />);
    expect(wrapper.find("CareerResourceList").length).toBe(2);
  });

  test("Renders one header", () => {
    const wrapper = shallow(<CareerPage />);
    expect(wrapper.find("h1").length).toBe(1);
  });

  test("Renders one paragraph", () => {
    const wrapper = shallow(<CareerPage />);
    expect(wrapper.find("p").length).toBe(1);
  });
});
