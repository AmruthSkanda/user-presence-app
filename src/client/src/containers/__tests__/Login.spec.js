jest.mock("react-router-dom");

import React from "react";
import Login from "../../components/login";
import { LoginContainer } from "../../containers/Login";
import { shallow } from "enzyme";
import ReactRouterDom from "react-router-dom";
ReactRouterDom.useHistory = jest.fn().mockReturnValue({
  push: jest.fn()
})

describe("CONTAINER: src/containers/Login.js", () => {
  const render = (props) => shallow(<LoginContainer {...props} />);
  beforeEach(() => {
    React.useEffect = jest.fn().mockImplementation(f => f());
  });

  it("should match snapshot", () => {
    expect(render()).toMatchSnapshot();
  });

  it("should render Login component to be rendered", () => {
    expect(render().find(Login)).toBeDefined();
  });

  it("should proceed to home page if user is logged in", () => {
    render({ loggingIn: false, loginSuccess: true });
    expect(ReactRouterDom.useHistory().push).toHaveBeenCalled();
  });
});