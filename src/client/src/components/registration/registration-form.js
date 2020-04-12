import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles, Typography, Button, Switch, FormControlLabel, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  registerForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: "space-around",
    height: "26em"
  },
  field: {
    width: "75%"
  }
}));

const RegistrationForm = ({ isSubmitting, onSubmit }) => {
  const classes = useStyles();
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setAdmin] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.elements);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.registerForm}>
      <header>
        <Typography variant="h5">
          Register
        </Typography>
      </header>
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        className={classes.field}
        required
        value={Username}
        onChange={({ target }) => setUsername(target.value)} />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        className={classes.field}
        required
        value={password}
        onChange={({ target }) => setPassword(target.value)} />
      <FormControlLabel
        control={
          <Switch
            id="admin"
            size="medium"
            checked={isAdmin}
            onChange={({ target }) => setAdmin(target.checked)}
            color="primary" />
        }
        label="is Admin?" />
      {isSubmitting ? <CircularProgress /> : <Button
        variant="contained"
        type="submit"
        disabled={isSubmitting}
        color="primary">
        Sign up
      </Button>}
      <footer>
        <Typography variant="subtitle2">
          Already have account with us? <Link to="/app">Sign in</Link>
        </Typography>
      </footer>
    </form>
  );
};

RegistrationForm.propTypes = {
  isSubmitting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
};

export default RegistrationForm;