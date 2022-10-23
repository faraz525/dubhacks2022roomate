import { initializeApp } from "firebase/app";
import * as firestore from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9nmkU4k0Q63A4Wz5C-zpduXC5pYp_S4Y",
  authDomain: "roomate-bd0dc.firebaseapp.com",
  projectId: "roomate-bd0dc",
  storageBucket: "roomate-bd0dc.appspot.com",
  messagingSenderId: "39785220635",
  appId: "1:39785220635:web:d8a27ede173bc7380cc6be"
}

const app = initializeApp(firebaseConfig);
const db = firestore.getFirestore(app);

// Initialize Firebase
export async function displayAll() {
    const querySnapshot = await firestore.getDocs(firestore.collection(db, "users"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().firstName}`);
  });
}

