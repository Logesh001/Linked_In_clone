//import firebase from "./firebase";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from "firebase/compat/app"

import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCYGakJvYvL1-AVLXWmt3yqvsnBgFBX95A",
  authDomain: "linked-in-ed944.firebaseapp.com",
  projectId: "linked-in-ed944",
  storageBucket: "linked-in-ed944.appspot.com",
  messagingSenderId: "543092544483",
  appId: "1:543092544483:web:32261500616c17dbd206d6"
};
  
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const auth=firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();

const storage=firebase.storage();

export {auth,provider,storage};
export default db;