import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

// export var firebaseConfig = {
//   apiKey: "AIzaSyBoUdiDtzQdC-m4nj9CPY5SvY7uKJGL71k",
//   authDomain: "matx-15ede.firebaseapp.com",
//   databaseURL: "https://matx-15ede.firebaseio.com",
//   projectId: "matx-15ede",
//   storageBucket: "matx-15ede.appspot.com",
//   messagingSenderId: "348111707030",
//   appId: "1:348111707030:web:70c4ca4eb3f1dbd18e1bb7",
//   measurementId: "G-806629YLNN",
// };

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