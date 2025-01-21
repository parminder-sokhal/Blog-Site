// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-site-4d9fd.firebaseapp.com",
  projectId: "blog-site-4d9fd",
  storageBucket: "blog-site-4d9fd.firebasestorage.app",
  messagingSenderId: "410951978898",
  appId: "1:410951978898:web:60db29cd43b7d1a8b9bb4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
