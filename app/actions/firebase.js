import firebase from 'firebase';
import {
  FETCH_PROJECTS,
  FIREBASE_CONFIG,
  USER_EXISTS,
  USER_ABSENTS,
  USER_EXISTS_LOADING,
  AUTH_MODAL,
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGOUT,
  AUTH_LOGOUT_ERROR,
  AUTH_LOGOUT_LOADING
 } from '../constants';

firebase.initializeApp(FIREBASE_CONFIG);

export function logout() {
  console.log('logout');
  return dispatch => {
    console.warn('logout started');
    firebase.auth().signOut().then(payload => {
      dispatch({
          type: AUTH_LOGOUT,
          payload
      });
    }).catch(error => {
      dispatch({
          type: AUTH_LOGOUT_ERROR,
          error
      });
    });
  };
}

export function checkUserAuthenication() {
  return dispatch => {
      dispatch({ type: USER_EXISTS_LOADING });
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch({
              type: USER_EXISTS,
              user: user.toJSON(),
            });
        } else {
          dispatch({ type: USER_ABSENTS });
        }
    });
  };
}

export function authModalToggle(state) {
  return {
    type: AUTH_MODAL,
    payload: state
  };
}

export function fetchProjects() {
  return dispatch => {
    console.warn('fetching started');
    const ref = firebase.database().ref('projects');
    ref.on('value', snapshot => {
      console.log('snapshot', snapshot.val());
      dispatch({
        type: FETCH_PROJECTS,
        payload: snapshot.val()
      });
    });
  };
}

export function addProject() {
  return dispatch => {

  };
}

export function login(email, password) {
  console.log(email);
  return dispatch => {
    dispatch({ type: AUTH_LOGIN_LOADING });
    const authPromise = firebase.auth().signInWithEmailAndPassword(email, password);
    authPromise.then(snapshot => {
      const { uid, displayName, photoURL, email, emailVerified, providerData } = snapshot;
      const payload = { uid, displayName, photoURL, email, emailVerified, providerData };
      console.debug(payload);
      dispatch({
          type: AUTH_LOGIN,
          receivedAt: Date.now(),
          user: payload
      });
    }).catch(error => {
      dispatch({
          type: AUTH_LOGIN_ERROR,
          receivedAt: Date.now(),
          error
      });
    });
  };
}

// export function login(email, password) {
//   return dispatch => {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .catch(error => {
//         dispatch({
//           type: AUTH_ERROR,
//           payload: error
//         });
//       })
//       .then(payload => {
//         dispatch({
//           type: AUTH_SUCCESS,
//           payload
//         });
//       });
//   };
// }
