import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBTLAXCKj1RROljsCiOs1EhcFQdOK0MrxM",
    authDomain: "screen-app-7642b.firebaseapp.com",
    projectId: "screen-app-7642b",
    storageBucket: "screen-app-7642b.appspot.com",
    messagingSenderId: "374280523433",
    appId: "1:374280523433:web:cff5ec96541f680d17a3b8"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
