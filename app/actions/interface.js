import {
  TOGGLE_SIDEBAR
} from '../constants';


export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR
  };
}


export function closeSidebar() {
  return {
    type: TOGGLE_SIDEBAR,
    payload: {
      sidebarVisibility: false
    }
  };
}
