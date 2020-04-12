import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { Body } from '../common';

const useStyles = makeStyles(() => ({
  container: {
    margin: "10em auto",
    maxWidth: "32em"
  }
}));

const Error = (props) => {
  const classes = useStyles();

  return (
    <Body>
      <section className={classes.container}>
        <Typography variant="h2" color="secondary">
          Sorry...
        </Typography>
        <br />
        <Typography variant="h5">
          {props.message}
        </Typography>
        <br />
        <Button href="/app" size="large" variant="outlined" color="primary">
          Log in
        </Button>
      </section>
    </Body>
  );
};

Error.propTypes = {
  message: PropTypes.string
};

export default Error;
