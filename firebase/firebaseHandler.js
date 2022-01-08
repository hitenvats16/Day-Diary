import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvYmGqm51V1D2ph_JbX3yvaAeVL1Tv0vk",
  authDomain: "test-f5878.firebaseapp.com",
  databaseURL: "https://test-f5878-default-rtdb.firebaseio.com",
  projectId: "test-f5878",
  storageBucket: "test-f5878.appspot.com",
  messagingSenderId: "386877497883",
  appId: "1:386877497883:web:7257195bd050fb00e08ebe",
  measurementId: "G-XQD133S437",
};

const app = initializeApp(firebaseConfig);

function signUpHandler(email, pass) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, pass)
    .then((UserCredentials) => {
      console.log(UserCredentials.user.uid);
    })
    .catch((e) => {
      console.log(e.code);
    });
}

export { signUpHandler, onAuthStateChanged};