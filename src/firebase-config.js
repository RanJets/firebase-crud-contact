import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDLFFm8_J3zEjB0oDlsQPdmexsEgsDiGUQ",
  authDomain: "react-contact-e44dd.firebaseapp.com",
  projectId: "react-contact-e44dd",
  storageBucket: "react-contact-e44dd.appspot.com",
  messagingSenderId: "633921684905",
  appId: "1:633921684905:web:fb4725b140bd31ee96f0b8",
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
