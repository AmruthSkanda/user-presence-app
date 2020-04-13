import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { History } from "../components";

import { withStore, withAuth } from "../hocs";
import { getUserHistory } from "../actions";

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
  users: state.userHistory.payload || []
});

const HistoryWithAuth = withAuth(HistoryContainer);
export default withStore(stateMapper)(HistoryWithAuth);