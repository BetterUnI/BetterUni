import React from "react";
import { render } from "enzyme";
import AdvisorList from "./AdvisorList";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../theme";
import { Table } from "@material-ui/core";

describe("AdvisorList Component", () => {
  // test("Should render without errors", () => {
  //   const advisorsLoading = true;
  //   const advisorList = [
  //     {
  //       id: 1,
  //       firstName: "jane",
  //       lastName: "doe"
  //     },
  //     {
  //       id: 2,
  //       firstName: "jane",
  //       lastName: "doe"
  //     }
  //   ];
  //   const component = render(
  //     <ThemeProvider theme={theme}>
  //       {" "}
  //       <AdvisorList advisors={advisorList} loading={advisorsLoading} />
  //     </ThemeProvider>
  //   );
  //   const testing = component.find(<Table />);
  //   expect(testing.length).toBe(1);
  // });
});
