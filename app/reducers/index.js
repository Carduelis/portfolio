import { combineReducers } from 'redux';

import ToggleColorReducer from './ToggleColor';
import ProjectsReducer from './Projects';
import NavigationReducer from './Navigation_reducer';
import InterfaceReducer from './Interface_reducer';
import Auth from './Auth';

// import {
//   TOGGLE_COLOR,
//   FETCH_PROJECTS,
//   EXAMPLE_REQUEST_START,
//   EXAMPLE_REQUEST_DATA,
// } from '../constants/Constants';

const rootReducer = combineReducers({
  color: ToggleColorReducer,
  projects: ProjectsReducer,
  auth: Auth,
  interfaceState: InterfaceReducer,
  navigation: NavigationReducer
});

// const initialState = {
//   color: 'red',
//   data: {
//     loading: false,
//     objects: [],
//   },
// };

export default rootReducer;

// export default function reduce(state = initialState, action) {
//   switch (action.type) {
//     case TOGGLE_COLOR:
//       return assign({}, state, {
//         color: state.color === 'red' ? 'blue' : 'red'
//       });
//     case FETCH_PROJECTS:
//       return assign({}, state, action.payload);
//
//     case EXAMPLE_REQUEST_START:
//       return assign({}, state, {
//         data: assign({}, state.data, {
//           loading: true,
//         }),
//       });
//
//     case EXAMPLE_REQUEST_DATA:
//       return assign({}, state, {
//         data: assign({}, state.data, {
//           loading: false,
//           objects: action.data,
//         }),
//       });
//
//     default:
//       return state;
//     }
// }
