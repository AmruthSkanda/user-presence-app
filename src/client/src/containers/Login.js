import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Login } from "../components";
import { withStore } from "../hocs";
import { useHistory } from "react-router-dom";

const LoginContainer = (props) => {
  const history = useHistory();
  const { loggingIn, loginSuccess } = props;
  useEffect(() => {
    console.log("REMOUNTING LOGIN....")
  }, [])
  useEffect(() => {
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
