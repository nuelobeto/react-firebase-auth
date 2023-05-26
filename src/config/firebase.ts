import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBAxwO1_MLM6CGv7vkcBCsLw8NxskXYYLs",
  authDomain: "react-firebase-auth-1c39e.firebaseapp.com",
  projectId: "react-firebase-auth-1c39e",
  storageBucket: "react-firebase-auth-1c39e.appspot.com",
  messagingSenderId: "448415269344",
  appId: "1:448415269344:web:8ab27b3553aba0e9f2ab85",
  databaseURL: "react-firebase-auth-1c39e-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
