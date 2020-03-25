import React from "react";
import { shallow } from "enzyme";
import { ConfirmCreateAccount } from "./ConfirmCreateAccount";

describe("ConfirmCreateAccount Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<ConfirmCreateAccount />);
    console.log(component.debug());
    const wrapper = component.find(".confirmCreateAccount");
    // Finish test
  });
});
