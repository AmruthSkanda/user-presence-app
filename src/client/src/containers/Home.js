import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Home } from "../components";

import { withStore, withAuth } from "../hocs";
import { getActiveUsers } from "../actions";
import Socket from "../utils/socket";

const dummyUsers = {
  skanda: { username: "skanda", lastVisited: new Date().toString(), admin: true },
  murthy: { username: "murthy", lastVisited: new Date().toString(), admin: false },
  hussain: { username: "hussain", lastVisited: new Date().toString(), admin: false },
  deepak: { username: "deepak", lastVisited: new Date().toString(), admin: true },
  sandeep: { username: "sandeep", lastVisited: new Date().toString(), admin: false }
};

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
  activeUsers: Object.values({ ...state.activeUsers.payload, ...dummyUsers }),
  loggedInUser: state.login.payload && state.login.payload.user
});

// const HomeWithAuth = withAuth(HomeContainer);
export default withStore(stateMapper)(Home);