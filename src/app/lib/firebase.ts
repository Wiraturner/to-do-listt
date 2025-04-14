import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// isi konfigurasi sesuai dengan konfigurasi firebase kalian
const firebaseConfig = {
  apiKey: "AIzaSyDKwIldpHEcGXmpCODzNkX455aN7g-j6LY",
  authDomain: "todolist-f2885.firebaseapp.com",
  projectId: "todolist-f2885",
  storageBucket: "todolist-f2885.firebasestorage.app",
  messagingSenderId: "726444440413",
  appId: "1:726444440413:web:d2a871b37d140b240806b4",
  measurementId: "G-6VCE3W77GT",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
