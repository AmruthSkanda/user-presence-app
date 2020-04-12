import React from 'react';
import PropTypes from 'prop-types';
import map from "lodash/map";
import { makeStyles } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import UserAvatar from './user';

const useStyles = makeStyles(() => ({
}));

const ActiveUsers = ({ list }) => {
  const classes = useStyles();
  return (
    <AvatarGroup max={5}>
      {map(list, (user) => <UserAvatar key={user.username} user={user} />)}
    </AvatarGroup>
  );
};

ActiveUsers.propTypes = {
  list: PropTypes.object
};

export default ActiveUsers;