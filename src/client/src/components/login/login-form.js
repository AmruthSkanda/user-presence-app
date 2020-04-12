import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles, TextField, Typography, Button, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  loginForm: {
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

const LoginForm = ({ isSubmitting, onSubmit }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.elements);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.loginForm}>
      <header>
        <Typography variant="h5">
          Welcome!
        </Typography>
        <Typography variant="subtitle1">
          Please login to see more
        </Typography>
      </header>
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        className={classes.field}
        required
        value={username}
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
      {isSubmitting ? <CircularProgress /> : <Button
        variant="contained"
        type="submit"
        disabled={isSubmitting}
        color="primary">
        Login
      </Button>}
      <footer>
        <Typography variant="subtitle2">
          Not registered yet? <Link to="/app/register">Sign up</Link>
        </Typography>
      </footer>
    </form>
  );
};

LoginForm.propTypes = {
  isSubmitting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;