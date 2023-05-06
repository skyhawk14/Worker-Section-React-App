// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEGAokEYq-dTH6tldHAuOKGUUFECsAHEk",
  authDomain: "reels-d7f60.firebaseapp.com",
  projectId: "reels-d7f60",
  storageBucket: "reels-d7f60.appspot.com",
  messagingSenderId: "670380285845",
  appId: "1:670380285845:web:67e40dfbd619061f10a09c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
