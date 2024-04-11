// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB6fi2MWntdkM4SazzRh6irc5MNEDlp0A",
  authDomain: "test-867a3.firebaseapp.com",
  projectId: "test-867a3",
  storageBucket: "test-867a3.appspot.com",
  messagingSenderId: "394876799938",
  appId: "1:394876799938:web:039fbbeed57810838b645b",
  measurementId: "G-QMNKB9C0ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const storage = getStorage(app);
const firestore = getFirestore(app);
// export const db = getFirestore(app);
export {firestore}