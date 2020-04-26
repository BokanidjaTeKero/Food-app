import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDKY07z8xpn1WhHRZF40S-PoPLVFwIiXV8",
    authDomain: "foodappusersfavoritefood.firebaseapp.com",
    databaseURL: "https://foodappusersfavoritefood.firebaseio.com",
    projectId: "foodappusersfavoritefood",
    appId: "1:568053922842:web:22cf4b867f18e1278ce5a3",
    measurementId: "G-J292670BN6"
  };
  // Initialize Firebase
export  const fire = firebase.initializeApp(config);
//   firebase.analytics();

//   // make auth and firestore references
export  const auth = firebase.auth();
export  const db = firebase.firestore();

// export default fire;