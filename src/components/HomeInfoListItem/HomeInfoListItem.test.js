import React from "react";
import { shallow } from "enzyme";
import HomeInfoListItem from "./HomeInfoListItem";

describe("HomeInfoListItem Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<HomeInfoListItem />);
    console.log(component.debug());
    const wrapper = component.find(".homeInfoListItem");
    expect(wrapper.length).toBe(1);
  });
});
