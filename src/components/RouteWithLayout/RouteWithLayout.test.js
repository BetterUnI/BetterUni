import React from "react";
import { shallow } from "enzyme";
import RouteWithLayout from "./RouteWithLayout";

describe("RouteWithLayout Component", () => {
  test("Should render without errors", () => {
    const component = shallow(
      <RouteWithLayout layout="test" component={React.Component} />
    );
    console.log(component.debug());
    // Finish test
  });
});
