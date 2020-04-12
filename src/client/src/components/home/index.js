import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { makeStyles, Modal, Paper } from '@material-ui/core';

import ActiveUsers from "./active-users";
import PopoverContent from "./popover-content";
import { Body } from "../common";
const MAX = 5;

const useStyles = makeStyles(() => ({
  container: {
    height: "85%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalWindow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalCtr: {
    width: "50%",
    overflow: "auto",
    maxHeight: "75%"
  }
}));

const Home = ({ activeUsers, loggedInUser }) => {
  const classes = useStyles();
  const [showDialog, setDialog] = useState(false);

  const isAdmin = get(loggedInUser, "isAdmin", false);
  const handleClose = () => setDialog(false);
  const shownUsers = activeUsers.slice(0, MAX);
  const hiddenUsers = activeUsers.slice(MAX);

  return (
    <Body isLoggedIn={true} admin={isAdmin}>
      <section className={classes.container}>
        <ActiveUsers
          users={shownUsers}
          hiddenCount={hiddenUsers.length}
          max={MAX}
          handleMore={() => setDialog(true)} />
        <Modal
          open={showDialog}
          onClose={handleClose}
          className={classes.modalWindow}
        >
          <Paper className={classes.modalCtr}>
            <PopoverContent users={hiddenUsers} />
          </Paper>
        </Modal>
      </section>
    </Body>
  );
};

Home.propTypes = {
  activeUsers: PropTypes.object,
  loggedInUser: PropTypes.object
};

export default Home;