// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg11XZ5t5qk937bNC43Vi-DTvdX1kkc-8",
  authDomain: "react-teeth-wizard.firebaseapp.com",
  projectId: "react-teeth-wizard",
  storageBucket: "react-teeth-wizard.firebasestorage.app",
  messagingSenderId: "650430876679",
  appId: "1:650430876679:web:44731f6e1f8e1bb6efaea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;