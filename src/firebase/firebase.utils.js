import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA7LhCEbE9uwMfOFZEPPsWZFFHmAscdDJY",
  authDomain: "gaming-store-d9afe.firebaseapp.com",
  databaseURL: "https://gaming-store-d9afe.firebaseio.com",
  projectId: "gaming-store-d9afe",
  storageBucket: "gaming-store-d9afe.appspot.com",
  messagingSenderId: "854823157031",
  appId: "1:854823157031:web:04604c43102262492c3d02",
  measurementId: "G-8FNLRKDYEF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserDocument = async ({
  uid,
  displayName,
  email,
  photoURL,
}) => {
  const userRef = firestore.doc(`users/${uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    userRef.set({
      displayName,
      email,
      photoURL,
    });
  }

  return userRef;
};

export default firebase;
