// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrPFOrcgdCsWi1ML7pDApM71OSqrAt2a8",
  authDomain: "netflix-gpt-2a852.firebaseapp.com",
  projectId: "netflix-gpt-2a852",
  storageBucket: "netflix-gpt-2a852.appspot.com",
  messagingSenderId: "971834743845",
  appId: "1:971834743845:web:a0d03e1e61ca942de433cc",
  measurementId: "G-67EHGMKKPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();