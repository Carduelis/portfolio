import { FETCH_PROJECT } from '../constants';

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PROJECT: {
      return payload;
    }
    default:
      return state;
  }
}
