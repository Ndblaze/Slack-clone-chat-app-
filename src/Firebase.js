import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDQUg-mC2pKqFuuUEy5Ki_7j9Qr15Q9qBk",
    authDomain: "slack-clone-8e040.firebaseapp.com",
    projectId: "slack-clone-8e040",
    storageBucket: "slack-clone-8e040.appspot.com",
    messagingSenderId: "574873077580",
    appId: "1:574873077580:web:471508724b06f38d8fb1e9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider}
export default db ;












