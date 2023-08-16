import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDnXH1ENuOIqIME3XqKsafV4lCA9BBJGpE",
    authDomain: "peliculas-1625e.firebaseapp.com",
    projectId: "peliculas-1625e",
    storageBucket: "peliculas-1625e.appspot.com",
    messagingSenderId: "598351865588",
    appId: "1:598351865588:web:f024bd82ebf6a5bb58e0a1"
  };

firebase.initializeApp(firebaseConfig)

export default firebase