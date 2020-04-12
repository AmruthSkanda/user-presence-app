import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { History } from "../components";

import { withStore, withAuth } from "../hocs";
import { getUserHistory } from "../actions";

const dummyHs = [
  {
    "isAdmin": true,
    "username": "akash",
    "createdOn": "2020-04-11T13:52:45.930Z",
    "lastVisited": "2020-04-12T16:18:44.859Z"
  },
  {
    "isAdmin": false,
    "username": "amruth",
    "createdOn": "2020-04-11T14:24:41.310Z",
    "lastVisited": "2020-04-12T17:32:32.484Z"
  },
  {
    "isAdmin": true,
    "username": "skanda",
    "createdOn": "2020-04-12T08:46:03.513Z",
    "lastVisited": "2020-04-12T08:46:18.867Z"
  }
];

const HistoryContainer = (props) => {
  useEffect(() => {
    getUserHistory();
  }, []);

  return <History {...props} />;
};

HistoryContainer.propTypes = {
  users: PropTypes.array
};

const stateMapper = (state) => ({
  users: dummyHs// state.userHistory.payload || []
});

// const HomeWithAuth = withAuth(HomeContainer);
export default withStore(stateMapper)(HistoryContainer);