import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "food-delivery-2eb2f.firebaseapp.com",
  projectId: "food-delivery-2eb2f",
  storageBucket: "food-delivery-2eb2f.appspot.com",
  messagingSenderId: "504872574794",
  appId: "1:504872574794:web:880530e0601bb1e167ebb3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
