import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //* for Cloud Firestore

// Adicione aqui as suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAh0jprnhSK-67Z9T3zXtrDJbG3y_sftl8",
  authDomain: "biblioteca-eletronica-14cc5.firebaseapp.com",
  projectId: "biblioteca-eletronica-14cc5",
  storageBucket: "biblioteca-eletronica-14cc5.appspot.com",
  messagingSenderId: "285652837628",
  appId: "1:285652837628:web:05d31bc21ab36a31726379"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
