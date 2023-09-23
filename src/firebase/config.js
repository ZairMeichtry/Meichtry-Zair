// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrSuF4Br6002_w4spd-oBGF8xk4EdVBSk",
  authDomain: "coderhouse-react-d2c20.firebaseapp.com",
  projectId: "coderhouse-react-d2c20",
  storageBucket: "coderhouse-react-d2c20.appspot.com",
  messagingSenderId: "787599143298",
  appId: "1:787599143298:web:9093fcb4a2380a6c775f9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);