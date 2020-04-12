import React from 'react';
import PropTypes from 'prop-types';
import { Paper, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { Body } from "../common";
import LoginForm from './login-form';
import { login } from '../../actions';

const useStyles = makeStyles(() => ({
  loginCtr: {
    margin: "8em auto",
    maxWidth: "32em"
  }
}));

const Login = ({
  loggingIn,
  loginFailure,
  signingUp,
  signUpSuccess,
  loggingOut,
  logoutSuccess
}) => {
  const classes = useStyles();
  const showError = !loggingIn && loginFailure;
  const registerSuccess = !signingUp && signUpSuccess;
  const logoutSuccessAlert = !loggingOut && logoutSuccess;
  const handleLogin = ({ username, password }) => {
    login(username.value, password.value);
  };

  return (
    <Body>
      <section className={classes.loginCtr}>
        {registerSuccess && <Alert severity="success">Registration successfull! Please login below</Alert>}
        {logoutSuccessAlert && <Alert severity="success">Logout successful! Visit again!</Alert>}
        {showError && <Alert severity="error">Invalid credientials. Please try again!</Alert>}
        <br />
        <Paper elevation={2}>
          <LoginForm
            onSubmit={handleLogin}
            isSubmitting={loggingIn} />
        </Paper>
      </section>
    </Body>
  );
};

Login.propTypes = {
  loggingIn: PropTypes.bool,
  loginFailure: PropTypes.bool,
  signingUp: PropTypes.bool,
  signUpSuccess: PropTypes.bool,
  loggingOut: PropTypes.bool,
  logoutSuccess: PropTypes.bool
};

export default Login;