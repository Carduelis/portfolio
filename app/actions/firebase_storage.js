import firebase from 'firebase';
import {
  GET_FILE_URL,
  GET_FILE_URL_ERROR
} from '../constants';

const strorageRef = firebase.storage().ref();

export function getFile(ref) {
  const fileRef = strorageRef.ref(ref);
  return dispatch => {
    fileRef.getDownloadURL().then(url => {
      dispatch({
        type: GET_FILE_URL,
        payload: url
      });
    }).catch(error => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      dispatch({
        type: GET_FILE_URL_ERROR,
        payload: error
      });

      switch (error.code) {
        case 'storage/object_not_found':
          // File doesn't exist
          break;

        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
        default:

          break;
      }
    });
  };
}

export function getImage(ref) {
  const imageRef = `images/${ref}`;
  getFile(imageRef);
}

export function getThumbnail(ref) {
  const imageThumbRef = `project_thumbnails/${ref}`;
  getImage(imageThumbRef);
}
