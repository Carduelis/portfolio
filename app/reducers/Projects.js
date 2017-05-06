import {
	FETCH_PROJECT,
	FETCH_PROJECTS
} from '../constants';

export default function (state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PROJECTS: {
      // we cant change state via push
      // we creates a new copy of state by concat
      // const newState = Object.keys(payload).map((key, index) => {
      //   console.debug(key, index);
      //   const stateProject = state[key];
      //   const freshProject = payload[key];
      //   return Object.assign({}, stateProject, freshProject);
      // });
      // console.warn(newState);
      return Object.assign({}, state, payload);
      // or via new es6-syntax
      // return [action.payload.data, ...state];
    }
		case FETCH_PROJECT: {
				const pieceOfState = {};
				const key = payload.id;
				pieceOfState[key] = Object.assign({}, state[key], payload);
				return Object.assign({}, state, pieceOfState);
			}
    default: {
      return state;
    }
  }
}
