import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBlXp0dNZgYMhYZyZZ8VbqJrXBBE3CvIlk",
  authDomain: "milano-ecommerce.firebaseapp.com",
  projectId: "milano-ecommerce",
  storageBucket: "milano-ecommerce.appspot.com",
  messagingSenderId: "541302754655",
  appId: "1:541302754655:web:efe991263fe7e007473aea",
  measurementId: "G-JSVMPZ53R0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
