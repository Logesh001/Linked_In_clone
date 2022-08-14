import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCYGakJvYvL1-AVLXWmt3yqvsnBgFBX95A",
  authDomain: "linked-in-ed944.firebaseapp.com",
  projectId: "linked-in-ed944",
  storageBucket: "linked-in-ed944.appspot.com",
  messagingSenderId: "543092544483",
  appId: "1:543092544483:web:32261500616c17dbd206d6"
};
  
const firebaseApp=initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

const storage = getStorage(firebaseApp);

export {auth,provider,storage};
export default db;