jest.mock("react-router-dom");

import React from "react";
import Registration from "../../components/Registration";
import { RegistrationContainer } from "../../containers/Registration";
import { shallow } from "enzyme";
import ReactRouterDom from "react-router-dom";
ReactRouterDom.useHistory = jest.fn().mockReturnValue({
  push: jest.fn()
});

describe("CONTAINER: src/containers/Registration.js", () => {
  const defaultProps = {
    dispatch: () => { },
    signingUp: true,
    signUpSuccess: false
  };
  const render = (props) => shallow(<RegistrationContainer {...defaultProps} {...props} />);
  beforeEach(() => {
    React.useEffect = jest.fn().mockImplementation(f => f());
  });

  it("should match snapshot", () => {
    expect(render()).toMatchSnapshot();
  });

  it("should render Registration component", () => {
    expect(render().find(Registration)).toBeDefined();
  });

  it("should proceed to login page if user is registered", () => {
    render({ signingUp: false, signUpSuccess: true });
    expect(ReactRouterDom.useHistory().push).toHaveBeenCalled();
  });
});