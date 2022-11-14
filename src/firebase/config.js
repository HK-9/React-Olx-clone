
// import firebase from "firebase";
// import 'firebase/auth'
// import 'firebase/firebase'
// import 'firebase/storage'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2rv-ASrFr1iMb-HeYYrcxDyqsc7gLvmc",
  authDomain: "react-olx-app-1f6b3.firebaseapp.com",
  projectId: "react-olx-app-1f6b3",
  storageBucket: "react-olx-app-1f6b3.appspot.com",
  messagingSenderId: "819971732719",
  appId: "1:819971732719:web:7ae88abf4f429ba0e7571a",
  measurementId: "G-0H95PXTZPR"
};

  export default firebase.initializeApp(firebaseConfig)