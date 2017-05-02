import firebase from 'firebase';
// import { getThumbnail } from '../actions/firebase_storage';
import {
  FETCH_PROJECT,
  FETCH_PROJECTS,
  PROJECT_ADDED,
  PROJECT_ADD_ERROR,
  FIREBASE_CONFIG,
  USER_EXISTS,
  USER_ABSENTS,
  USER_EXISTS_LOADING,
  AUTH_MODAL,
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGOUT,
  AUTH_LOGOUT_ERROR
 } from '../constants';

firebase.initializeApp(FIREBASE_CONFIG);
const storageRef = firebase.storage()


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
      const data = snapshot.val();
      for (let i in data) {
        const project = data[i];
        const { thumbnail } = project;
        if (project.thumbnail) {
          storageRef
            .ref('images/project_thumbnails/' + project.thumbnail)
            .getDownloadURL()
            .then(url => {
              project.cover = url;
              dispatch({
                type: FETCH_PROJECTS,
                payload: data
              });
            })
            .catch(console.error);
        }
      }
      // const payload = data.map(item => {
      //   if (item.thumbnail) {
      //     storageRef
      //       .ref('images/project_thumbnails/' + item.thumbnail)
      //       .getDownloadURL()
      //       .then(url => {
      //         payload.cover = url;
      //         dispatch({
      //           type: FETCH_PROJECTS,
      //           payload
      //         });
      //       });
      //   }
      // });
      dispatch({
        type: FETCH_PROJECTS,
        payload: snapshot.val()
      });
    });
  };
}

export function fetchProject(options) {
    return dispatch => {
      const ref = firebase.database().ref('projects/' + options.id);
      ref.on('value', snapshot => {
        console.log('snapshot', snapshot.val());
        dispatch({
          type: FETCH_PROJECT,
          payload: snapshot.val()
        });
      });
    };
}

export function addProject(postData) {
  return dispatch => {
    const rootRef = firebase.database().ref();
    const projectsRef = rootRef.child('projects');
    const newPostKey = projectsRef.push().key;
    const updates = {}
    updates['/projects/' + newPostKey] = postData;
    firebase.database().ref().update(updates)
    .then(data => {
      dispatch({
        type: PROJECT_ADDED,
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: PROJECT_ADD_ERROR,
        error: error
      });
    })

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
