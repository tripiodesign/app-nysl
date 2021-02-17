import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC3npGf7Jx-oyWzw-KDP9lgp9qnY8CzxQk",
  authDomain: "app-nysl-303cb.firebaseapp.com",
  projectId: "app-nysl-303cb",
  storageBucket: "app-nysl-303cb.appspot.com",
  messagingSenderId: "107770918772",
  appId: "1:107770918772:web:8a827e5f1fc08484fa5e21"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
