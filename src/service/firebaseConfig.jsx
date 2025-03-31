// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo9u-oOiww5osdIchUTGV06sAAuS25Syk",
  authDomain: "ai-travel-planner-7dfc1.firebaseapp.com",
  projectId: "ai-travel-planner-7dfc1",
  storageBucket: "ai-travel-planner-7dfc1.firebasestorage.app",
  messagingSenderId: "722952026260",
  appId: "1:722952026260:web:9e35496c6423cdce8c9c81",
  measurementId: "G-7SVELV7R3W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
// const analytics = getAnalytics(app);