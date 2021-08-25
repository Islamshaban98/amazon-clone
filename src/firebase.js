import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBtMme1PfR7dHnD_E-xtYrFb1mmFO_UDr4",
    authDomain: "clone-e08b3.firebaseapp.com",
    projectId: "clone-e08b3",
    storageBucket: "clone-e08b3.appspot.com",
    messagingSenderId: "602746245794",
    appId: "1:602746245794:web:8980b6a07b7ff3301c3dfb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const dp = firebase.firestore();
  export const auth = firebase.auth();