import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Home } from "../components";

import { withStore, withAuth } from "../hocs";
import { getActiveUsers } from "../actions";
import Socket from "../utils/socket";

const HomeContainer = (props) => {
  useEffect(() => {
    if (!Socket.getSocket())
      Socket.create();
    getActiveUsers();
  }, []);

  return <Home {...props} />;
};

HomeContainer.propTypes = {
  activeUsers: PropTypes.object,
  loggedInUser: PropTypes.object
};

const stateMapper = (state) => ({
  activeUsers: state.activeUsers.payload,
  loggedInUser: state.login.payload && state.login.payload.user
});

const HomeWithAuth = withAuth(HomeContainer);
export default withStore(stateMapper)(HomeWithAuth);