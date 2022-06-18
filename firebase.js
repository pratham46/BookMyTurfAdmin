// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDynSagvMokwOZ4TEMqXRibIL74O8DspKc",
  authDomain: "bookmyturf-3fc42.firebaseapp.com",
  databaseURL: "https://bookmyturf-3fc42-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bookmyturf-3fc42",
  storageBucket: "bookmyturf-3fc42.appspot.com",
  messagingSenderId: "256919770691",
  appId: "1:256919770691:web:366d98374641f8d0c0e6f6",
  measurementId: "G-ZPCW6R1KV6"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
