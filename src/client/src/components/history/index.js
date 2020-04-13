import React from 'react';
import PropTypes from 'prop-types';
import times from 'lodash/times';
import map from 'lodash/map';
import { makeStyles, Typography, List } from '@material-ui/core';
import { blue, lime, orange, red, yellow, indigo, cyan, amber, grey } from '@material-ui/core/colors';

import HistoryItem from './history-item';
import { Body } from '../common';

const allColors = [];
times(5, () => allColors.push(
  blue, lime, orange, red, yellow, indigo, cyan, amber
));

const useColors = makeStyles(() => map(allColors, (c) => ({
  color: "white",
  backgroundColor: c[500]
})));

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "1em",
    textAlign: "left"
  },
  title: {
    padding: "8px 16px"
  },
  noData: {
    color: grey[500],
    padding: "16px"
  }
}));

const History = ({ users }) => {
  const colors = useColors();
  const classes = useStyles();

  return (
    <Body isLoggedIn={true}>
      <section className={classes.container}>
        <Typography variant="h4" color="primary" className={classes.title}>
          User History
        </Typography>
        {!users.length ? (
          <Typography variant="h5" className={classes.noData}>No history data</Typography>
        ) : <List>
            {users.map((user, i) => (
              <HistoryItem
                key={user.username}
                color={colors[i]}
                {...user} />)
            )}
          </List>}
      </section>
    </Body>
  );
};

History.propTypes = {
  users: PropTypes.array
};

export default History;