import firebase from 'firebase/app';
import 'firebase/firestore';
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