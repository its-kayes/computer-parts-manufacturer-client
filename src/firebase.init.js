// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';


// const firebaseConfig = {
  
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1-GRXrmWPNO22rJmexR67HG5oCFZOB0k",
  authDomain: "parts-manufacturer-23ecb.firebaseapp.com",
  projectId: "parts-manufacturer-23ecb",
  storageBucket: "parts-manufacturer-23ecb.appspot.com",
  messagingSenderId: "781616171535",
  appId: "1:781616171535:web:5ba392be0b54a7669af17a"
  

//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app);

export default auth;




