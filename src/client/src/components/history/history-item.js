import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';
import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import UserAvatar from '../home/user-avatar';
import { formatLastVisitTS } from '../../utils';

const HistoryItem = ({ color, username, createdOn, lastVisited, isAdmin }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <UserAvatar
          initial={username[0]}
          className={color}
          admin={isAdmin} />
      </ListItemAvatar>
      <ListItemText
        primary={capitalize(username)}
        secondary={<em>{`Created on: ${formatLastVisitTS(createdOn)}`}</em>} />
      <ListItemText
        style={{ textAlign: "right" }}
        primary={<em>{`Last online: ${formatLastVisitTS(lastVisited)}`}</em>} />
    </ListItem>
  )
};

HistoryItem.propTypes = {
  username: PropTypes.string,
  lastVisited: PropTypes.string,
  color: PropTypes.string,
  isAdmin: PropTypes.bool
};

export default HistoryItem;