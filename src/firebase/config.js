import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCKEaWP9HE9ztX3VabgAHx90HRE8YBDx80",
  authDomain: "r-instafire.firebaseapp.com",
  projectId: "r-instafire",
  storageBucket: "r-instafire.appspot.com",
  messagingSenderId: "863394393607",
  appId: "1:863394393607:web:2a92276c5f6b843bf704a2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
