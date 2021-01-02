/**
 * @fileoverview firebase utilities 
 * 
 * clear config 
 */
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export function signInWithGoogle() {
  return auth.signInWithPopup(provider);
}

export default firebase;
