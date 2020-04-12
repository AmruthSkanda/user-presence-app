import React from 'react';
import PropTypes from "prop-types";
import capitalize from 'lodash/capitalize';
import { Typography } from '@material-ui/core';

import { formatLastVisitTS } from '../../utils';

const UserTip = ({ username, lastVisited }) => {
  return (
    <>
      <Typography>
        Name: {capitalize(username)}
      </Typography>
      <em>last online: {formatLastVisitTS(lastVisited)}</em>
    </>
  );
}

UserTip.propTypes = {
  username: PropTypes.string,
  lastVisited: PropTypes.string
};

export default UserTip;