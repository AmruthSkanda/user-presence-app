import * as ACTIONS from "../utils/actions";
const initalState = { loading: false, payload: null, error: false };

export const activeUsers = (state = initalState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ACTIVE_USERS_PENDING:
      return { ...state, loading: true, error: false };
    case ACTIONS.FETCH_ACTIVE_USERS_SUCCESS:
      return { ...state, loading: false, payload: action.payload }
    case ACTIONS.FETCH_ACTIVE_USERS_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state;
  }
};

export const userHistory = (state = initalState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_USER_HISTORY_PENDING:
      return { ...state, loading: true, error: false };
    case ACTIONS.FETCH_USER_HISTORY_SUCCESS:
      return { ...state, loading: false, payload: action.payload }
    default:
      return state;
  }
};
