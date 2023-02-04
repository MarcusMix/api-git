// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// import firebase from 'firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQAI2UpZvNzoRo76Gm2PJOQ0NaEsXVrwM",
  authDomain: "autenticacao-marcusmix.firebaseapp.com",
  projectId: "autenticacao-marcusmix",
  storageBucket: "autenticacao-marcusmix.appspot.com",
  messagingSenderId: "839622341639",
  appId: "1:839622341639:web:c7f4c5fec26db39ba966a2",
  measurementId: "G-SJBC1XV7B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()