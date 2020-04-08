import React from "react";
import { shallow } from "enzyme";
import HomeInfoList from "./HomeInfoList";

describe("HomeInfoList Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<HomeInfoList />);
    console.log(component.debug());
    const wrapper = component.find(".homeInfoList");
    expect(wrapper.length).toBe(1);
  });
});
