import { FETCH_PROJECTS } from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      // we cant change state via push
      // we creates a new copy of state by concat
      return state.concat(action.payload);
      // or via new es6-syntax
      // return [action.payload.data, ...state];
    default:
      return state;
  }
}
