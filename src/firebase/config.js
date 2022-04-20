import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb6iWMfO9HbYgcoVHjSY8YckrQvP8sddw",
  authDomain: "cooking-ninja-site-8c0b4.firebaseapp.com",
  projectId: "cooking-ninja-site-8c0b4",
  storageBucket: "cooking-ninja-site-8c0b4.appspot.com",
  messagingSenderId: "73740916784",
  appId: "1:73740916784:web:3fda36c970167717cc35f5",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
