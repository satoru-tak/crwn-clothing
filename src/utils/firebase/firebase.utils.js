import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY98ASxJzEk9T14PP-N8hNTevq0Swlea8",
  authDomain: "crwn-clothing-db-a9217.firebaseapp.com",
  projectId: "crwn-clothing-db-a9217",
  storageBucket: "crwn-clothing-db-a9217.appspot.com",
  messagingSenderId: "780810449604",
  appId: "1:780810449604:web:c3d33367f38ebf7409cf91",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
