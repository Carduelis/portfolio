import firebase from 'firebase';
import {
  FETCH_PROJECTS,
  FIREBASE_CONFIG,
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT,
  AUTH_LOGOUT_ERROR
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
          payload: error
      });
    });
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

export function login(email, password) {
  console.log(email);
  return dispatch => {
    const authPromise = firebase.auth().signInWithEmailAndPassword(email, password);
    authPromise.then(snapshot => {
      const { uid, displayName, photoURL, email, emailVerified, providerData } = snapshot;
      dispatch({
          type: AUTH_LOGIN,
          payload: { uid, displayName, photoURL, email, emailVerified, providerData }
      });
    }).catch(error => {
      dispatch({
          type: AUTH_LOGIN_ERROR,
          payload: error
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
