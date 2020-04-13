jest.unmock("../../actions");

import React from "react";
import { HistoryContainer } from "../History";
import History from "../../components/history";
import { shallow } from "enzyme";
import * as Actions from "../../actions/history";
Actions.getUserHistory = jest.fn();

describe("CONTAINER: src/containers/History.js", () => {
  const defaultProps = { users: [] };
  let wrapper;
  beforeEach(() => {
    React.useEffect = jest.fn().mockImplementation(f => f());
    wrapper = shallow(<HistoryContainer {...defaultProps} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render History component with right props", () => {
    expect(wrapper.find(History)).toBeDefined();
  });

  it("should call getUserHistory action on mount", () => {
    expect(Actions.getUserHistory).toHaveBeenCalled();
  });
});