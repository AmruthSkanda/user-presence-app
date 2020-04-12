import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { Registration } from "../components";
import { withStore } from "../hocs";
import { SIGN_UP_RESET } from "../utils/actions";

const RegistrationContainer = (props) => {
  const history = useHistory();
  const { signingUp, signUpSuccess, dispatch } = props;

  useEffect(() => {
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