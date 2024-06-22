// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-project-91e99.firebaseapp.com",
  projectId: "estate-project-91e99",
  storageBucket: "estate-project-91e99.appspot.com",
  messagingSenderId: "39877521564",
  appId: "1:39877521564:web:46a0435defbdb17e51bd59",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
