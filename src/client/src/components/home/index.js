import React from 'react';
import PropTypes from 'prop-types';

import ActiveUsers from "./active-users";
import { Body } from "../common";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    margin: "10em auto",
    maxWidth: "32em"
  }
}));

const Home = ({ activeUsers }) => {
  const classes = useStyles();
  return (
    <Body isLoggedIn={true}>
      <section className={classes.container}>
        <ActiveUsers list={activeUsers} />
      </section>
    </Body>
  );
};

Home.propTypes = {
  activeUsers: PropTypes.object
};

export default Home;