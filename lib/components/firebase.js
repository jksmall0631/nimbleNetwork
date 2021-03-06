import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA7NzgzTdgnpW-jT-oL8sn2YCJI9PrJTn0',
  authDomain: 'nimble-network-26488.firebaseapp.com',
  databaseURL: 'https://nimble-network-26488.firebaseio.com',
  storageBucket: 'nimble-network-26488.appspot.com',
  messagingSenderId: '887975928079'
};

export default firebase.initializeApp(config);
export let currentUser;
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();

export const signUp = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    console.log('Sign Up error', error);
    alert(error.message);
    return false;
  });
};

export const signIn = (email, password) => {
  auth.signInWithEmailAndPassword(email, password).catch((error) => {
    console.log('Sign In error', error);
    alert(error.message);
    return false;
  });
};

export const signOut = () => {
    firebase.auth().signOut().then(function() {
    console.log('Signed Out');
  }, function(error) {
    console.error('Sign Out Error', error);
  });
};

export const sendContactInfo = (userID, contactID, value) => {
  firebase.database().ref(`${userID}/` + contactID).set({
    info: value
  });
};

export const getContactInfo = (userID, contactID) => {
  if(contactID){
    return firebase.database().ref(`${userID}/` + contactID + `/info/`)
  } else {
    return firebase.database().ref(`${userID}/`)
  }
};

export const removeContact = (userID, contactID) => {
  firebase.database().ref(`${userID}/` + contactID).remove();
};
