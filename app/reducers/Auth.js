import {
  AUTH_MODAL,
  USER_EXISTS,
  USER_ABSENTS,
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGOUT,
  AUTH_LOGOUT_ERROR,
  AUTH_LOGOUT_LOADING
} from '../constants';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  error: false,
};

export default function (state = initialState, action) {
  const { type, payload, user, error } = action;
  switch (type) {
    case AUTH_MODAL:
      return Object.assign({}, state, payload);
    case USER_EXISTS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        isFetching: false,
        error: false,
        user
      });
    case USER_ABSENTS:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        error: false,
      });

    case AUTH_LOGIN:
      return Object.assign({}, state, {
        isAuthenticated: true,
        isFetching: false,
        error: false,
        user
      });
    case AUTH_LOGIN_ERROR:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        error,
      });
    case AUTH_LOGIN_LOADING:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: true,
        error: false,
      });
    case AUTH_LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        error: false
      });

    case AUTH_LOGOUT_ERROR:
      return Object.assign({}, state, payload);

    case AUTH_LOGOUT_LOADING:
        // we cant change state via push
        // we creates a new copy of state by concat
        return Object.assign({}, state, payload);
        // or via new es6-syntax
        // return [payload.data, ...state];
    default:
      return state;
  }
}
