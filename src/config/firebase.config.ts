import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCizRHN4Ptu8_Airl_zw_SmSKIhXS4jASY",
  authDomain: "crypto-82a86.firebaseapp.com",
  projectId: "crypto-82a86",
  storageBucket: "crypto-82a86.appspot.com",
  messagingSenderId: "1089909587643",
  appId: "1:1089909587643:web:37ff423213ca8f5e34b39e",
};

const app = initializeApp(firebaseConfig);
export const auth: any = getAuth(app);
