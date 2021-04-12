import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4r4_Qb9t7y3jbA458o8845lOL2IDK83o",
  authDomain: "abhi-snap-clone.firebaseapp.com",
  projectId: "abhi-snap-clone",
  storageBucket: "abhi-snap-clone.appspot.com",
  messagingSenderId: "977899888725",
  appId: "1:977899888725:web:b867b12183cf95676a34dc",
  measurementId: "G-FKS19H7E6T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
