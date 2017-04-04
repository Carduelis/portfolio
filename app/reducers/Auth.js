import {
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT,
  AUTH_LOGOUT_ERROR } from '../constants';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_LOGIN:
    case AUTH_LOGIN_ERROR:
      // we cant change state via push
      // we creates a new copy of state by concat
      return Object.assign({}, state, action.payload);
      // or via new es6-syntax
      // return [action.payload.data, ...state];
    case AUTH_LOGOUT:
    case AUTH_LOGOUT_ERROR:
        // we cant change state via push
        // we creates a new copy of state by concat
        return Object.assign({}, state, action.payload);
        // or via new es6-syntax
        // return [action.payload.data, ...state];
    default:
      return state;
  }
}
