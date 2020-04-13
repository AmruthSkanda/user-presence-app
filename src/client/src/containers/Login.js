import React from "react";
import PropTypes from "prop-types";

import { Login } from "../components";
import { withStore } from "../hocs";
import ReactRouterDom from "react-router-dom";

export const LoginContainer = (props) => {
  const history = ReactRouterDom.useHistory();
  const { loggingIn, loginSuccess } = props;

  React.useEffect(() => {
    if (!loggingIn && loginSuccess) {
      history.push("/app/home");
    }
  }, [loggingIn, loginSuccess]);

  return <Login {...props} />;
};

LoginContainer.propTypes = {
  loggingIn: PropTypes.bool,
  loginSuccess: PropTypes.bool,
  loginFailure: PropTypes.bool,
  signingUp: PropTypes.bool,
  signUpSuccess: PropTypes.bool,
  loggingOut: PropTypes.bool,
  logoutSuccess: PropTypes.bool
};

const stateMapper = (state) => ({
  loggingIn: state.login.loading,
  loginSuccess: state.login.payload,
  loginFailure: state.login.error,
  signingUp: state.signUp.loading,
  signUpSuccess: state.signUp.payload,
  loggingOut: state.logout.loading,
  logoutSuccess: state.logout.payload,
});

export default withStore(stateMapper)(LoginContainer);
