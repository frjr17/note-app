// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfY0pKqB1QE2rRmPcIX4_ADv0dJox2AU8",
  authDomain: "note-app-e3cd9.firebaseapp.com",
  projectId: "note-app-e3cd9",
  storageBucket: "note-app-e3cd9.appspot.com",
  messagingSenderId: "519725870479",
  appId: "1:519725870479:web:4567c2b88aea132e8c2ffa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error: any) {
    console.error("Error creating user", error.message);
  }
};

export const signInAuthWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};

export const signOutUser = async () => signOut(auth);
