import React from 'react';
import PropTypes from 'prop-types';

import toUpper from "lodash/toUpper";
import { makeStyles, Avatar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  user: {
    position: "relative",
    marginRight: "-1em"
  }
}));

const UserAvatar = ({ user }) => {
  const classes = useStyles();
  return (
    <Avatar alt="">{toUpper(user.username[0])}</Avatar>
  );
};

UserAvatar.propTypes = {
  user: PropTypes.object
};

export default UserAvatar;