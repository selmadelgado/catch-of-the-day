import Rebase from 're-base';
import firebase from 'firebase';

// Firebase App
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDK37JUQ_oLgZalOT2XW7GLeZNqhF8hVUs",
    authDomain: "catch-of-the-day-d5c09.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-d5c09.firebaseio.com"
  });

  // Rebase Bindings
  const base = Rebase.createClass(firebaseApp.database());

// This is a named export
  export { firebaseApp };

  // This is a default export
  export default base;