import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/Star';
import MenuItem from '@material-ui/core/MenuItem';
import { green } from '@material-ui/core/colors';
import Menu from '@material-ui/core/Menu';
import { useHistory } from 'react-router-dom';

import { logout } from '../../../actions';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
    margin: "auto 1em",
    textAlign: "center",
  },
  title: {
    flexGrow: 1,
  },
}));

const Body = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => {
    history.push("/app");
    logout();
  };

  const handleHistory = () => {
    history.push("/app/history");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            User Presence
          </Typography>
          {props.isLoggedIn && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {props.admin ? (
                  <Badge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    badgeContent={<StarIcon style={{ color: green[500] }} />}>
                    <AccountCircle fontSize="large" />
                  </Badge>
                ) : <AccountCircle fontSize="large" />}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                {props.admin && <MenuItem onClick={handleHistory}>User History</MenuItem>}
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <main className={classes.container}>
        {props.children}
      </main>
    </>
  );
}

Body.defaultProps = {
  isLoggedIn: false,
  admin: false
};

Body.propTypes = {
  isLoggedIn: PropTypes.bool,
  admin: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};

export default Body;