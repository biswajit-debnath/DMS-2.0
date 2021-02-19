import Firebase from 'firebase';
import "firebase/auth";

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyAV0vy8QIztdK6S2Bpg9DQRmZbFTsiG9Xk",
    authDomain: "dmsne-testing.firebaseapp.com",
    databaseURL: "https://dmsne-testing-default-rtdb.firebaseio.com",
    projectId: "dmsne-testing",
    storageBucket: "dmsne-testing.appspot.com",
    messagingSenderId: "107694033164",
    appId: "1:107694033164:web:960f82dbd47a5cd218a129",
    measurementId: "G-DDDQCVS14K"
  };
  // Initialize Firebase
  Firebase.initializeApp(firebaseConfig);
  
  
export const db = Firebase.database();
export const auth = Firebase.auth();
export const storage = Firebase.storage();



  