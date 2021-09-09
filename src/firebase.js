import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDuf36B1nnsAvOE7K8ybbubPKl6YQgQFzU",
  authDomain: "insta-holic.firebaseapp.com",
  projectId: "insta-holic",
  storageBucket: "insta-holic.appspot.com",
  messagingSenderId: "379824161506",
  appId: "1:379824161506:web:85cc939431465baca954bb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };