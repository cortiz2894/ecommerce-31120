// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6jyJlEGgwCghLTNkqYSufgLfGxoG2c2g",
  authDomain: "ecommerce-31120.firebaseapp.com",
  projectId: "ecommerce-31120",
  storageBucket: "ecommerce-31120.appspot.com",
  messagingSenderId: "577106752358",
  appId: "1:577106752358:web:e59235f95c5706c3624ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db
