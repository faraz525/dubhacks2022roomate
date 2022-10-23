// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9nmkU4k0Q63A4Wz5C-zpduXC5pYp_S4Y",
  authDomain: "roomate-bd0dc.firebaseapp.com",
  projectId: "roomate-bd0dc",
  storageBucket: "roomate-bd0dc.appspot.com",
  messagingSenderId: "39785220635",
  appId: "1:39785220635:web:d8a27ede173bc7380cc6be"
}; 

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
export default firebase;

