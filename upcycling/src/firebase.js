import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"
// 🥑 06-15 storage 추가
import { getStorage } from "firebase/storage";

const firebaseConfig = {

    apiKey: "AIzaSyAZwe8-JumYMCPZE6NCHS7QRplQ1VQhCa8",
    authDomain: "login-97034.firebaseapp.com",
    databaseURL: "https://login-97034-default-rtdb.firebaseio.com",
    projectId: "login-97034",
    storageBucket: "login-97034.appspot.com",
    messagingSenderId: "737764108580",
    appId: "1:737764108580:web:aaea951966d9fb3b306bb1"
};
// Initialize Firebase 

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const firestore = getFirestore(app);
// 🥑 06-15 storage 추가
const storage = getStorage(app);
// 🥑 06-15 storage 추가
export { app , auth , db , firestore, storage};