import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import { Paper, makeStyles } from '@material-ui/core';

import { Body } from "../common";
import RegistrationForm from './registration-form';
import { signUp } from '../../actions';

const useStyles = makeStyles(() => ({
  signUpCtr: {
    margin: "10em auto",
    maxWidth: "32em"
  }
}));

const Registration = ({ signingUp, signUpFailure }) => {
  const classes = useStyles();
  const showError = !signingUp && signUpFailure;
  const handleRegistration = ({ username, password, admin }) => {
    signUp(username.value, password.value, admin.checked);
  };

  return (
    <Body>
      <section className={classes.signUpCtr}>
        {showError && <Alert severity="error">{signUpFailure}</Alert>}
        <br />
        <Paper elevation={2}>
          <RegistrationForm
            isSubmitting={signingUp}
            onSubmit={handleRegistration} />
        </Paper>
      </section>
    </Body>
  );
};

Registration.propTypes = {
  signingUp: PropTypes.bool,
  signUpFailure: PropTypes.string
};

export default Registration;