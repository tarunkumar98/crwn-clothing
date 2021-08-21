import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDMtnPEL8uQMdlx9UhIrEpoz2g1Gqiwwu8",
    authDomain: "crwn-db-71461.firebaseapp.com",
    projectId: "crwn-db-71461",
    storageBucket: "crwn-db-71461.appspot.com",
    messagingSenderId: "383812958391",
    appId: "1:383812958391:web:62d504f05310cfbe98f532"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});

  export const SignInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;