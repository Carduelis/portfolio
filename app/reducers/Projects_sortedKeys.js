import { FETCH_PROJECTS } from '../constants';

export default function (state = [], action) {
  const { type, sortedKeys } = action;
  switch (type) {
    case FETCH_PROJECTS: {
      return sortedKeys;
      // or via new es6-syntax
      // return [action.payload.data, ...state];
    }
    default: {
      return state;
    }
  }
}
