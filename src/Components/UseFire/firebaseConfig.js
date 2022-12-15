

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBG1ZLiBkoA1rL3DTFsXxo0mnejD2fA7tU",
  authDomain: "result-77cd6.firebaseapp.com",
  databaseURL: "https://result-77cd6-default-rtdb.firebaseio.com",
  projectId: "result-77cd6",
  storageBucket: "result-77cd6.appspot.com",
  messagingSenderId: "640244240612",
  appId: "1:640244240612:web:d107ed52c818fe11ab1cf1"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;