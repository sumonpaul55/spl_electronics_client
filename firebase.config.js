// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdxoOv--H1djzDh1ye0XcIJnqHaoIdOAY",
    authDomain: "scp-electronics.firebaseapp.com",
    projectId: "scp-electronics",
    storageBucket: "scp-electronics.appspot.com",
    messagingSenderId: "501536924368",
    appId: "1:501536924368:web:c90bd39ac0a7ae0eb6b4d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;