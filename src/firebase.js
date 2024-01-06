// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Now you can use 'app' and 'analytics' in your application
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7evxIySHlIVXQTOki52cxFJY4-6yY-BA",
  authDomain: "project1-fa18f.firebaseapp.com",
  projectId: "project1-fa18f",
  storageBucket: "project1-fa18f.appspot.com",
  messagingSenderId: "998668905771",
  appId: "1:998668905771:web:d52b883e8ff5d6f7cd296e",
  measurementId: "G-X9GPBJFBDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);