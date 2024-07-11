import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCO2lJftELl7MYE90YMzqdx9asDOX7Hfz4",
//   authDomain: "cart-app-2053c.firebaseapp.com",
//   projectId: "cart-app-2053c",
//   storageBucket: "cart-app-2053c.appspot.com",
//   messagingSenderId: "130354326370",
//   appId: "1:130354326370:web:fffb3bd0e430b4ed2fda3b",
//   measurementId: "G-93TMNZVRSD",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCiMtLRN6-d5XY6EiYJZugkuq5hi8lO2R8",
  authDomain: "cryptocoin-dd631.firebaseapp.com",
  projectId: "cryptocoin-dd631",
  storageBucket: "cryptocoin-dd631.appspot.com",
  messagingSenderId: "166191335683",
  appId: "1:166191335683:web:6d4159d1716b2ff488c136",
  measurementId: "G-XYQ3YHKXSB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
