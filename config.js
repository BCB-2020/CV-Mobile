import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_u5TdVGpl-EX25R7lveBkteQ5HNRJ9ds",
  authDomain: "covid-19-a0c84.firebaseapp.com",
  databaseURL: "https://covid-19-a0c84.firebaseio.com",
  projectId: "covid-19-a0c84",
  storageBucket: "covid-19-a0c84.appspot.com",
  messagingSenderId: "928527835853",
  appId: "1:928527835853:web:8f16d3df200f521fb37f84",
  measurementId: "G-PMKGWFEQDJ"
};
// Initialize Firebase

let app = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export const db = app.firestore();
