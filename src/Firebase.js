import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId:process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MSG_SENDER,
//   appId: process.env.REACT_APP_ID,
//   measurementId: process.env.REACT_APP_ID
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
