import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDMtnPEL8uQMdlx9UhIrEpoz2g1Gqiwwu8",
  authDomain: "crwn-db-71461.firebaseapp.com",
  databaseURL: 'https://crwn-db.firebaseio.com',
  projectId: "crwn-db-71461",
  storageBucket: "crwn-db-71461.appspot.com",
  messagingSenderId: "383812958391",
  appId: "1:383812958391:web:62d504f05310cfbe98f532"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
