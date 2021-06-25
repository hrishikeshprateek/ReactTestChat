import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDIywp8h4JNh3IA4P7kpjI8h-tJiPim-Fw",
  authDomain: "e-commerce-thundersharp.firebaseapp.com",
  databaseURL: "https://e-commerce-thundersharp-default-rtdb.firebaseio.com",
  projectId: "e-commerce-thundersharp",
  storageBucket: "e-commerce-thundersharp.appspot.com",
  messagingSenderId: "653791913481",
  appId: "1:653791913481:web:2722bc7994b8c629df7ad8",
  measurementId: "G-WTYHG24XNN"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
