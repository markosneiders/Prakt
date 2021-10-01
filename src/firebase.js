import firebase from "firebase";

//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyDocpv9l9rBI9qcAH8zeIBj2b-FEuMG-sI",
	authDomain: "praktify.firebaseapp.com",
	projectId: "praktify",
	storageBucket: "praktify.appspot.com",
	messagingSenderId: "823938196336",
	appId: "1:823938196336:web:832f0d1f930f0cad2e25b5",
	measurementId: "G-M246NSMR9X",
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { auth, db };
