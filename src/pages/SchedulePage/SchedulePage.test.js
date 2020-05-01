import React from "react";
import { shallow } from "enzyme";
import { SchedulePage } from "./SchedulePage";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../theme";
import CategoryList from "../../components/CategoryList/CategoryList";
import AdvisorList from "../../components/CategoryList/CategoryList";
import SchedulerCalendarModal from "../../components/SchedulerCalendarModal/SchedulerCalendarModal";
import SchedulerConfirmationModal from "../../components/SchedulerConfirmationModal/SchedulerConfirmationModal";

describe("SchedulePage Component", () => {
  // test("Renders CategoryList component", () => {
  //   const wrapper = shallow(<SchedulePage />);
  //   expect(wrapper.find("CategoryList").length).toBe(1);
  // });
  // test("Renders the main header/banner", () => {
  //   const wrapper = shallow(<SchedulePage />);
  //   expect(wrapper.find("h3").length).toBe(1);
  // });
  // test("Render AdvisorList if state is not null", () => {
  //   const wrapper = shallow(<SchedulePage />);
  //   wrapper.setState({ selectedCategory: !null });
  //   expect(wrapper.find(AdvisorList).length).toBe(1);
  // });
  // test("Don't render AdvisorList if state is null", () => {
  //   const wrapper = shallow(<SchedulePage />);
  //   wrapper.setState({ selectedCategory: null });
  //   expect(wrapper.find(AdvisorList).length).toBe(0);
  // });
  // //Check if SchedulerCalendarModal renders correctly
  // test("Render SchedulerCalendarModal if state is open", () => {
  //   const wrapper = shallow(<SchedulePage />);
  //   wrapper.setState({ open: true });
  //   expect(wrapper.find(SchedulerCalendarModal).length).toBe(1);
  // });
  // test("Don't render SchedulerCalendarModal if state is not open", () => {
  //   const wrapper = shallow(<SchedulePage />);
  //   wrapper.setState({ open: false });
  //   expect(wrapper.find(SchedulerCalendarModal).length).toBe(0);
  // });
  // //Check if SchedulerConfirmationModal renders correctly
  // test("Render SchedulerConfirmationModal if state is open", () => {
  //   const wrapper = shallow(<SchedulePage />);
  //   wrapper.setState({ openConfirmation: true });
  //   expect(wrapper.find(SchedulerConfirmationModal).length).toBe(1);
  // });
  // test("Don't render SchedulerConfirmationModal if state is not open", () => {
  //   const wrapper = shallow(<SchedulePage />);
  //   wrapper.setState({ openConfirmation: false });
  //   expect(wrapper.find(SchedulerConfirmationModal).length).toBe(0);
  // });
});
