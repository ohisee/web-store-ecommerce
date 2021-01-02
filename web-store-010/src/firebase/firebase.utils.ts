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

/**
 * to create a user profile document 
 */
export async function createUserProfileDocument(
  userAuth: firebase.User | null,
  additionalData: {}) {

  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log("error processing user", err.message);
    }
  }

  return userRef;
}

export default firebase;
