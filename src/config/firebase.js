import { initializeApp } from "firebase/app";
import * as firestore from "firebase/firestore";
import { collection, getDocs, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    console.log(doc.id);
  });
}

export async function login(username, password) {
  var chec = false;
  const querySnapshot = await firestore.getDocs(firestore.collection(db, "users"));
  querySnapshot.forEach((doc) => {
    if (username === doc.id && password === doc.data().password) {
      console.log("true");
      chec = true;
      //return true;
      return;
    }
  });
  console.log("checl");
  if (chec === true) {
    console.log("f")
    return true;
  } else {
    return false;
  }
}

export async function signup(email, password, first, last, buildings) {
  await firestore.setDoc(firestore.doc(db, "users", email), {
    firstName: first,
    lastName: last,
    password: password,
    buildings: [buildings]
  });
  console.log("signed up")
  return true;
}

