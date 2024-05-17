import { getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDWwMtWib7Cwlcvbs0Eik86CxRmjwF7s0",
  authDomain: "khatgpt-c16d3.firebaseapp.com",
  projectId: "khatgpt-c16d3",
  storageBucket: "khatgpt-c16d3.appspot.com",
  messagingSenderId: "566006387951",
  appId: "1:566006387951:web:728f4efb53f70c5c25771a"
};

// Initialize Firebase using the singleton pattern
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}