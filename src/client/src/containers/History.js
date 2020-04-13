import React from "react";
import PropTypes from "prop-types";

import { History } from "../components";

import * as Hocs from "../hocs";
import { getUserHistory } from "../actions";

export const HistoryContainer = (props) => {
  React.useEffect(() => {
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

const HistoryWithAuth = Hocs.withAuth(HistoryContainer);
export default Hocs.withStore(stateMapper)(HistoryWithAuth);