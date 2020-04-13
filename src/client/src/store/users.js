import * as ACTIONS from "../utils/actions";
const dummyUsers = {
  dummy1: { username: "sDummy1", lastVisited: "2020-01-02T05:23:59+00:00", admin: true },
  dummy2: { username: "mDummy2", lastVisited: "2020-03-08T02:23:59+00:00", admin: false },
  dummy3: { username: "hDummy3", lastVisited: "2020-01-14T04:23:59+00:00", admin: false },
  dummy4: { username: "dDummy4", lastVisited: "2020-04-12T12:23:59+00:00", admin: true },
  dummy5: { username: "sDummy5", lastVisited: "2020-01-11T02:23:59+00:00", admin: false }
};
const initalState = { loading: false, payload: dummyUsers, error: false };
const initalHistoryState = { loading: false, payload: Object.values(dummyUsers), error: false };

export const activeUsers = (state = initalState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ACTIVE_USERS_PENDING:
      return { ...state, loading: true, error: false };
    case ACTIONS.FETCH_ACTIVE_USERS_SUCCESS:
      return { ...state, loading: false, payload: { ...action.payload, ...dummyUsers } }
    case ACTIONS.FETCH_ACTIVE_USERS_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state;
  }
};

export const userHistory = (state = initalHistoryState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_USER_HISTORY_PENDING:
      return { ...state, loading: true, error: false };
    case ACTIONS.FETCH_USER_HISTORY_SUCCESS:
      return { ...state, loading: false, payload: [...action.payload, ...Object.values(dummyUsers)] }
    default:
      return state;
  }
};
