import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { IndexDefinition } from "mongoose";

const firebaseConfig = {
  apiKey: "AIzaSyCVSG-7xJ_98TjkqpEmu4s77enqZUaRm98",
  authDomain: "flexxit-99dbd.firebaseapp.com",
  projectId: "flexxit-99dbd",
  storageBucket: "flexxit-99dbd.appspot.com",
  messagingSenderId: "591650751763",
  appId: "1:591650751763:web:5b5a277068551bec5d46e6",
  measurementId: "G-W1L9N1J5E3"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

