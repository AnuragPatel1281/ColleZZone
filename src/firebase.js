import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAgtOCVbNSBAf3USTYM6MSF5aVXRUmS1DY",
    authDomain: "quora-7f13f.firebaseapp.com",
    projectId: "quora-7f13f",
    storageBucket: "quora-7f13f.appspot.com",
    messagingSenderId: "612402522945",
    appId: "1:612402522945:web:cc41ec92c3fb5b08678fc0",
    measurementId: "G-JGBDT8GG96"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const db = firebaseApp.firestore()
 
  export {auth,provider}
  
  export default db
  