// For the first Firebase configuration
/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfigOne = {
  apiKey: "AIzaSyBQKl_QwSaVDJzRagKG2w7SuMqXWQQnD3Y",
  authDomain: "charjkaro-7a3bc.firebaseapp.com",
  projectId: "charjkaro-7a3bc",
  storageBucket: "charjkaro-7a3bc.appspot.com",
  messagingSenderId: "403439704816",
  appId: "1:403439704816:web:d5629947b2aedfa37a8035",
  measurementId: "G-LGMKMS3VEB",
};


const appOne = initializeApp(firebaseConfigOne, "appOne");
export const db = getFirestore(appOne);

// For the second Firebase configuration
