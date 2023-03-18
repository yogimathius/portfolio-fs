import firebase from 'firebase';

const firebaseConfig = {

  apiKey: "AIzaSyATtpaPiwOOQ6-NnNFL5LUvtBRhCcZvZrk",
  authDomain: "sovereign-birth-mailer.firebaseapp.com",
  projectId: "sovereign-birth-mailer",
  storageBucket: "sovereign-birth-mailer.appspot.com",
  messagingSenderId: "1092915835585",
  appId: "1:1092915835585:web:0ce28b0b05512aabd49a40",
  measurementId: "G-7W5C09JHLD"


};try {

  firebase.initializeApp(firebaseConfig);

} catch (err) {

  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const fire = firebase;

export default fire;