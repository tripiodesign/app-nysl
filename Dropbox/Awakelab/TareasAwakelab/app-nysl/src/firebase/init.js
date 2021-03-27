import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAoDcU5FZHpG9LkGHBjgDulfLEfO8-LgMU",
  authDomain: "app-nysl-8bd19.firebaseapp.com",
  databaseURL: "https://app-nysl-8bd19-default-rtdb.firebaseio.com",
  projectId: "app-nysl-8bd19",
  storageBucket: "app-nysl-8bd19.appspot.com",
  messagingSenderId: "670998141551",
  appId: "1:670998141551:web:cedfd270afcd7a2ba18b9a"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
