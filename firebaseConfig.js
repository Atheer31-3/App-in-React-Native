import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// Exchange  ? with  your information from your project 
const firebaseConfig = {
  apiKey: "AIzaSyAbkXOz12DFNOHlaIszksOfQSGc0oNPblM",
  authDomain: "finalexam11-2023.firebaseapp.com",
  databaseURL: "https://finalexam11-2023-default-rtdb.firebaseio.com",
  projectId: "finalexam11-2023",
  storageBucket: "finalexam11-2023.appspot.com",
  messagingSenderId: "822992693925",
  appId: "1:822992693925:web:6751476fcee62fbd0ebb4c",
  measurementId: "G-5RXY007Y6K"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const finalexam = getDatabase(app);

