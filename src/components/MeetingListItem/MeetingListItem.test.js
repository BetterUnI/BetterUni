import React from "react";
import { shallow } from "enzyme";
import HomeInfoListItem from "./MeetingListItem";

describe("MeetingListItem Component", () => {
  test("Should render without errors", () => {
    const component = shallow(<HomeInfoListItem />);
    console.log(component.debug());
    const wrapper = component.find(".meetingListItem");
    expect(wrapper.length).toBe(1);
  });
});
