import React from "react";
import { shallow } from "enzyme";
import { CreateAccount } from "./CreateAccount";

describe("CreateAccount Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<CreateAccount />);
    console.log(component.debug());
    const wrapper = component.find(".createAccount");
    // Finish test
  });
});
