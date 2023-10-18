// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSTMXJKHsyfAqEkBfBNzxDoZ_a1UtJJhI",
  authDomain: "fusionelectrohub.firebaseapp.com",
  projectId: "fusionelectrohub",
  storageBucket: "fusionelectrohub.appspot.com",
  messagingSenderId: "288235038921",
  appId: "1:288235038921:web:fd4faece912ec334f34518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth