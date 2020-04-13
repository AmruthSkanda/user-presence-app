import * as ACTIONS from "../utils/actions";
const initalState = { loading: false, payload: null, error: false };

export const login = (state = initalState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_PENDING:
      return { ...state, loading: true, error: false };
    case ACTIONS.LOGIN_SUCCESS:
      return { ...state, loading: false, payload: action.payload, error: false };
    case ACTIONS.LOGIN_FAILURE:
      return { ...state, loading: false, error: true };
    case ACTIONS.SIGN_UP_PENDING:
    case ACTIONS.LOGIN_RESET:
      return { ...initalState };
    default:
      return state;
  }
};

export const signUp = (state = initalState, action) => {
  switch (action.type) {
    case ACTIONS.SIGN_UP_PENDING:
      return { ...state, loading: true, error: false };
    case ACTIONS.SIGN_UP_SUCCESS:
      return { ...state, loading: false, payload: action.payload, error: false };
    case ACTIONS.SIGN_UP_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ACTIONS.LOGIN_PENDING:
    case ACTIONS.SIGN_UP_RESET:
      return { ...initalState };
    default:
      return state;
  }
};

export const logout = (state = initalState, action) => {
  switch (action.type) {
    case ACTIONS.LOGOUT_PENDING:
      return { ...state, loading: true, error: false };
    case ACTIONS.LOGOUT_SUCCESS:
      return { ...state, loading: false, payload: true, error: false };
    case ACTIONS.LOGOUT_FAILURE:
      return { ...state, loading: false, error: true };
    case ACTIONS.LOGIN_PENDING:
    case ACTIONS.LOGOUT_RESET:
      return { ...initalState };
    default:
      return state;
  }
};
