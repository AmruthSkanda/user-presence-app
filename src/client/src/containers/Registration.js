import React from "react";
import PropTypes from "prop-types";
import ReactRouterDom from "react-router-dom";

import { Registration } from "../components";
import { withStore } from "../hocs";
import { SIGN_UP_RESET } from "../utils/actions";

export const RegistrationContainer = (props) => {
  const history = ReactRouterDom.useHistory();
  const { signingUp, signUpSuccess, dispatch } = props;

  React.useEffect(() => {
    if (!signingUp && signUpSuccess) {
      history.push("/app");
      setTimeout(() => dispatch({ type: SIGN_UP_RESET }), 3000);
    }
  }, [signingUp, signUpSuccess]);

  return <Registration {...props} />
};

RegistrationContainer.propTypes = {
  signingUp: PropTypes.bool.isRequired,
  signUpSuccess: PropTypes.bool,
  signUpFailure: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
};

const stateMapper = (state) => ({
  signingUp: state.signUp.loading,
  signUpSuccess: state.signUp.payload,
  signUpFailure: state.signUp.error,
});

export default withStore(stateMapper)(RegistrationContainer);