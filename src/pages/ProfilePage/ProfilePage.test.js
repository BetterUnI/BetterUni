import React from "react";
import { shallow } from "enzyme";
import { ProfilePage } from "./ProfilePage";

describe("ProfilePage Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<ProfilePage />);
    console.log(component.debug());
    const wrapper = component.find("h1");
    expect(wrapper.length).toBe(1);
  });
});
