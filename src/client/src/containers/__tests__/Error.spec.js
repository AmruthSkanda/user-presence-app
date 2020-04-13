import React from 'react';
import ErrorContainer from "../Error";
import { Error } from "../../components";
import { shallow } from "enzyme";

describe("CONTAINER: src/containers/Error.js", () => {
  const render = (props) => shallow(<ErrorContainer {...props} />);

  it("should match snapshot", () => {
    expect(render()).toMatchSnapshot();
  });

  it("should render Error component with proper meesage prop", () => {
    const defaultMsg = "Invalid session. Please login again!";
    expect(render().find(Error).prop("message")).toBe(defaultMsg);
  })
});