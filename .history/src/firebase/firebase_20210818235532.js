import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDzfyYkyz-mEFcvtX6cmCu6LsSiqsvTvNI",
  authDomain: "app-exma.firebaseapp.com",
  projectId: "app-exma",
  storageBucket: "app-exma.appspot.com",
  messagingSenderId: "1022203082426",
  appId: "1:1022203082426:web:cc36a7701b697cee937483",
  measurementId: "G-1JBSWKH4VY",
};

firebase.initializeApp(firebaseConfig);