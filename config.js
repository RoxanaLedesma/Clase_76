import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAJEhcrNQyAT7bcou5tlz19dLTNURa1Aa0",
  authDomain: "biblioteca-digital-5d3b2.firebaseapp.com",
  projectId: "biblioteca-digital-5d3b2",
  storageBucket: "biblioteca-digital-5d3b2.appspot.com",
  messagingSenderId: "889200339385",
  appId: "1:889200339385:web:7310872d6bed47ffca2e68"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
