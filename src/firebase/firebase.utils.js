import firebase from 'firebase/app';
import 'firebase/firestrore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCblg98_kC3e00IJJImBUK3Djz6os526U4",
    authDomain: "crwn-db-f9ae0.firebaseapp.com",
    projectId: "crwn-db-f9ae0",
    storageBucket: "crwn-db-f9ae0.appspot.com",
    messagingSenderId: "160504486677",
    appId: "1:160504486677:web:dc9f2288f8b946454ce71c",
    measurementId: "G-RVWE37H1QD"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);