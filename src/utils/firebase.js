
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDgFyE0QYg5NBLFNNjsGLF-QR5PsJSCSLY",
  authDomain: "410407.firebaseapp.com",
  projectId: "youtube-410407",
  storageBucket: "youtube-410407.appspot.com",
  messagingSenderId: "657101453244",
  appId: "1:657101453244:web:6547033c527c6bf55f9db9",
  measurementId: "G-7Z3G5HMX0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();;
