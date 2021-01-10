import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB1TD82epZxb8V5ecwbgUEUTlu2j0ovOaM",
  authDomain: "online-admission-system-124cd.firebaseapp.com",
  projectId: "online-admission-system-124cd",
  storageBucket: "online-admission-system-124cd.appspot.com",
  messagingSenderId: "702514473472",
  appId: "1:702514473472:web:e1c5f336ecee3c216dc6e5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
