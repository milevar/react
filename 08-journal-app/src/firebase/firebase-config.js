import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0KCLwefIgFa6WEsQUl0mopkrt-Z0MF_E",
    authDomain: "react-journal-app-8c929.firebaseapp.com",
    projectId: "react-journal-app-8c929",
    storageBucket: "react-journal-app-8c929.appspot.com",
    messagingSenderId: "800687094672",
    appId: "1:800687094672:web:fbf1171c0d3fd845945115"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}

