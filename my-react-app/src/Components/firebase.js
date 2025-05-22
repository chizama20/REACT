// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-JUoHNXPWSHMYbmKM4TWbjCwIkPUCB48",
  authDomain: "i-need-help-72bb6.firebaseapp.com",
  projectId: "i-need-help-72bb6",
  storageBucket: "i-need-help-72bb6.appspot.com",
  messagingSenderId: "794525717469",
  appId: "1:794525717469:web:44e1854ce17e8a4061aff4",
  measurementId: "G-ZC15XKJMT3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
