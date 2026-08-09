// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUeQj4ug5Zf8Dkh7LQVtFXv2g0-bBYKZk",
  authDomain: "signup-ec189.firebaseapp.com",
  projectId: "signup-ec189",
  storageBucket: "signup-ec189.firebasestorage.app",
  messagingSenderId: "576885456474",
  appId: "1:576885456474:web:d14959e71c8379fbd46263",
  measurementId: "G-YMSVRVCHVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {
db

}