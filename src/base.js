import Rebase from 're-base';
import firebase from 'firebase';

// Firebase App
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC72CYq_uxA76i-wOxCmYKVRX1xje4djOs",
  authDomain: "catch-of-the-day-ddd21.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ddd21.firebaseio.com"
  });

// Rebase Bindings
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;