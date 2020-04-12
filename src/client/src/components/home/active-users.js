import React from 'react';
import PropTypes from 'prop-types';
import map from "lodash/map";
import { deepOrange, deepPurple, pink, teal, brown, green, grey } from '@material-ui/core/colors';
import { makeStyles, Avatar, Tooltip } from '@material-ui/core';

import UserTip from './user-tip';
import UserAvatar from './user-avatar';

const useColors = makeStyles(() => map([deepOrange, deepPurple, teal, brown, green], (c) => ({
  color: "white",
  backgroundColor: c[500]
})));

const useStyles = makeStyles(() => ({
  listCtr: {
    listStyleType: "none",
    display: "flex"
  },
  avatarCtr: {
    marginRight: "-0.75em"
  },
  lastAvatar: {
    color: "white",
    backgroundColor: grey[500]
  },
  size: {
    height: "3em",
    width: "3em"
  }
}));

const ActiveUsers = ({ users, hiddenCount, handleMore }) => {
  const colors = useColors();
  const classes = useStyles();

  return (
    <ul className={classes.listCtr}>
      {users.map((user, i) => {
        return (
          <li key={user.username} className={classes.avatarCtr}>
            <Tooltip
              disableTouchListener
              title={<UserTip {...user} />}
              arrow>
              <div>
                <UserAvatar
                  initial={user.username[0]}
                  className={`${colors[i]} ${classes.size}`}
                  admin={user.admin} />
              </div>
            </Tooltip>
          </li>
        )
      })
      }
      {hiddenCount ? (<li key="last-item" className={classes.avatarCtr} onClick={handleMore}>
        <Avatar
          alt=""
          className={`${classes.lastAvatar} ${classes.size}`} >
          +{hiddenCount}
        </Avatar>
      </li>
      ) : null}
    </ul>
  );
};



ActiveUsers.propTypes = {
  users: PropTypes.array,
  handleMore: PropTypes.func,
  hiddenCount: PropTypes.number
};

export default React.memo(ActiveUsers);