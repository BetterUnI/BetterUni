import React from "react";
import { shallow } from "enzyme";
import { HomePage } from "./HomePage";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../theme";
import HomeInfoList from "../../components/HomeInfoList/HomeInfoList";

describe("HomePage Component", () => {
  test("HomePage Renders", () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        {" "}
        <HomePage />{" "}
      </ThemeProvider>
    );
    expect(component.find("h1"));
    expect(component.find(<HomeInfoList />));
  });
});
