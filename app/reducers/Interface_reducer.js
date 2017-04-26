import { TOGGLE_SIDEBAR } from '../constants';

const initialState = {
  sidebarVisibility: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SIDEBAR: {
      const newState = payload || {
        sidebarVisibility: !state.sidebarVisibility
      };
      return Object.assign({}, state, newState);
    }
    default:
      return state;
  }
}
