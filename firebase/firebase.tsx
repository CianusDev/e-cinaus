// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDvL7BE6-VdHoCMpDBArsLFcCDbw8VNW18",
  authDomain: "e-cianus.firebaseapp.com",
  projectId: "e-cianus",
  storageBucket: "e-cianus.appspot.com",
  messagingSenderId: "735438891185",
  appId: "1:735438891185:web:1bea9888e1c2d04a095a90",
  measurementId: "G-7W6111WHMQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(initializeApp(firebaseConfig));
export const db = getFirestore(app);