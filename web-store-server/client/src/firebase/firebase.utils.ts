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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export function signInWithGoogle() {
  return auth.signInWithPopup(googleProvider);
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
      });
    } catch (err) {
      console.log("error processing user", err.message);
    }
  }

  return userRef;
}

/**
 * this is to programmatically add collection of data into firebase 
 * @param collectionKey collection key / path
 * @param objectsToAdd a list of objects to add into firebase
 */
export const addCollectionAndDocuments =
  async (collectionKey: string, objectsToAdd: any[]) => {
    const collectRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    for (let el of objectsToAdd) {
      // get a new doc reference with a random generated unique key 
      const docRef = collectRef.doc();
      batch.set(docRef, el);
    }

    return await batch.commit();
  };

type CollectionType = {
  routeName: string,
  id: string,
  title: string,
  items: any[],
};

/**
 * @param collections collections query snap shot of shop data 
 * @returns {{[key: string]: any}} object of items 
 */
export const convertCollectionsSnapshotToMap =
  (collections: firebase.firestore.QuerySnapshot): { [key: string]: any } => {
    const transformedCollection: CollectionType[] = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return {
        // convert symbol, spaces to URI, no need to store routeName in database 
        routeName: encodeURI(title),
        id: doc.id,
        title,
        items,
      }
    });

    return transformedCollection.reduce(
      (accumulator: { [key: string]: any }, collection: CollectionType) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
      }, {});
  }

/**
 * subscribe to auth.onAuthStateChanged to check user session, 
 * and unsubscribe right after 
 * the user auth response from auth.onAuthStateChanged is either the user's 
 * snapshot or null 
 * @returns {Promise} promise ocntaining the user snapshot or null 
 */
export function getCurrentUser(): Promise<firebase.User | null> {
  return new Promise((resolve: (user: firebase.User | null) => void, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, error => reject(error));
  });
}

/**
 * to get user cart reference from firestore  
 * @param userId user Id 
 * @returns Promise of document reference 
 */
export async function getUserCartRef(userId: string) {
  const cartRef = firestore.collection("carts").where("userId", "==", userId);
  try {
    const cartSnapshot = await cartRef.get();
    if (cartSnapshot.empty) {
      const emptyCartDocRef = firestore.collection("carts").doc();
      await emptyCartDocRef.set({ userId, cartItems: [] })
      return emptyCartDocRef;
    } else {
      return cartSnapshot.docs[0].ref;
    }
  } catch (e) {
    return Promise.reject(e.message);
  }
}

export default firebase;
