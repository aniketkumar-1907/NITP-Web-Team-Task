import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBDI91t_GV8CYaJCh07s8QEOffYQ9RsNaA",
    authDomain: "webweaver-778cd.firebaseapp.com",
    databaseURL: "https://webweaver-778cd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "webweaver-778cd",
    storageBucket: "webweaver-778cd.appspot.com",
    messagingSenderId: "465141618049",
    appId: "1:465141618049:web:4784d2add7440456000480",
    measurementId: "G-ZTP5K3107L"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage () ;
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };