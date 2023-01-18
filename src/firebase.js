import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsZzRXLR7HeuqO4nS5wivBjiFWvXkTeCQ",
  authDomain: "newproject-c370a.firebaseapp.com",
  projectId: "newproject-c370a",
  storageBucket: "newproject-c370a.appspot.com",
  messagingSenderId: "490755644962",
  appId: "1:490755644962:web:9fc4ad1220fcbc7b4af47b",
  measurementId: "G-2Y93W2R8GF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
