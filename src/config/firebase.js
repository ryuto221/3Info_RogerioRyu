import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAINyHZT0JtCoh8OewgrWiQt_t8ISke7EQ",
  authDomain: "inforogerio-7b820.firebaseapp.com",
  projectId: "inforogerio-7b820",
  storageBucket: "inforogerio-7b820.appspot.com",
  messagingSenderId: "574437595411",
  appId: "1:574437595411:web:ba9c7416b14f3cd7d762e6",
  measurementId: "G-9N404EC5YL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);