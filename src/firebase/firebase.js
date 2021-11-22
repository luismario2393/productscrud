
import { firebaseConfig } from "./config";
import app from 'firebase/compat/app';
import {  
  getAuth, 
  createUserWithEmailAndPassword, 
  updateProfile,
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth';
import  'firebase/compat/firestore';
import 'firebase/compat/storage';

class Firebase {
  constructor() {
    !app.apps.length && app.initializeApp(firebaseConfig);
    this.storage = app.storage();
 
  }
  
}

const firebase = new Firebase();

export default firebase;



