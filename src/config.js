import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';


//   sulphitcCo config firebase
export var firebaseConfig = {
  apiKey: "AIzaSyBHw4H9R4J4__qZKasV_LHQhM6h2DJVL-s",
  authDomain: "sulphiticco.firebaseapp.com",
  databaseURL: "https://sulphiticco.firebaseio.com",
  projectId: "sulphiticco",
  storageBucket: "sulphiticco.appspot.com",
  messagingSenderId: "342611553964",
  appId: "1:342611553964:web:0c0152748174e74e203909",
  measurementId: "G-X5HBEG33L6"
};

export const auth0Config = {
  client_id: "XmminWIs0S8gR3gIRBydYLWbF58x81vK",
  domain: "matx.us.auth0.com",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDatabase = getDatabase(firebaseApp);
export const auth = getAuth(firebaseApp);
export const fireStore = getFirestore();