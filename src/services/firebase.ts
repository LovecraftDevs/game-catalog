// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyzh4mm78pKvvzhNstDoWNWxK7ONFY4Jw",
  authDomain: "lovecraft-game-catalog.firebaseapp.com",
  projectId: "lovecraft-game-catalog",
  storageBucket: "lovecraft-game-catalog.appspot.com",
  messagingSenderId: "926709273730",
  appId: "1:926709273730:web:c667a5ce7c0df2a144109b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
