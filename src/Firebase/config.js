import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAD7VnkVlvA7l8T5i67LPAragU1zW3iLkc",
  authDomain: "bojao-express.firebaseapp.com",
  projectId: "bojao-express",
  storageBucket: "bojao-express.appspot.com",
  messagingSenderId: "42595941795",
  appId: "1:42595941795:web:c39ac26fac9c7fe667ee16",
  measurementId: "G-S2ESFKF757",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
