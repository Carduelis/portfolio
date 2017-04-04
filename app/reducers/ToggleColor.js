import TOGGLE_COLOR from '../constants/Constants';

const initialState = 'red';

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_COLOR:
      return Object.assign({}, state, {
        color: state === 'red' ? 'blue' : 'red'
      });
    default:
      return state;
  }
}
