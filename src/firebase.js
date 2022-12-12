import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBs99y6Q33JUtbLn7Zrf6w9dAbJIrTiUXc",
  authDomain: "caocarioca-dd56d.firebaseapp.com",
  projectId: "caocarioca-dd56d",
  storageBucket: "caocarioca-dd56d.appspot.com",
  messagingSenderId: "117846885791",
  appId: "1:117846885791:web:3ff540b795f2cee6aee9aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
