import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';
import map from 'lodash/map';
import times from 'lodash/times';
import { makeStyles, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { green, blue, lime, orange, red, yellow, indigo, cyan, amber } from '@material-ui/core/colors';

import { formatLastVisitTS } from '../../utils';
import UserAvatar from './user-avatar';

const allColors = [];
times(5, () => allColors.push(
  green, blue, lime, orange, red, yellow, indigo, cyan, amber
));

const useColors = makeStyles(() => map(allColors, (c) => ({
  color: "white",
  backgroundColor: c[500]
})));

const PopoverItem = ({ username, color, lastVisited, admin }) => (
  <ListItem>
    <ListItemAvatar>
      <UserAvatar
        initial={username[0]}
        className={color}
        admin={admin} />
    </ListItemAvatar>
    <ListItemText
      primary={capitalize(username)}
      secondary={<em>{`Last online: ${formatLastVisitTS(lastVisited)}`}</em>} />
  </ListItem>
);

PopoverItem.propTypes = {
  username: PropTypes.string,
  lastVisited: PropTypes.string,
  color: PropTypes.object,
  admin: PropTypes.bool
};

const PopoverContent = ({ users }) => {
  const colors = useColors();
  return (
    <List>
      {users.map((user, i) => (
        <PopoverItem
          key={user.username}
          color={colors[i]}
          {...user} />)
      )}
    </List>
  );
};

PopoverContent.propTypes = {
  usersMap: PropTypes.array
};

export default PopoverContent;