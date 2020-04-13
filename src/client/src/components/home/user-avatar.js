import React from 'react';
import PropTypes from 'prop-types';
import toUpper from "lodash/toUpper";
import { Avatar, Badge } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { green } from '@material-ui/core/colors';

const UserAvatar = ({ initial, admin, className }) => {
  const avatar = (<Avatar
    alt=""
    className={className} >
    {toUpper(initial)}
  </Avatar>);

  return admin ? (
    <Badge
      overlap="circle"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      badgeContent={<StarIcon style={{ color: green[500] }} />}>
      {avatar}
    </Badge>
  ) : avatar;
};

UserAvatar.propTypes = {
  initial: PropTypes.string,
  admin: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};


export default UserAvatar;