import React from "react";
import { shallow } from "enzyme";
import { Login } from "./Login";

describe("Login Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<Login />);
    console.log(component.debug());
    const wrapper = component.find(".login");
    // Finish test
  });
});
