"use strict";
// Firebase configuration
const _firebaseConfig = {
    apiKey: "AIzaSyArNUd7ceS3y13PQ7qL1DNY6YenNKPIrC4",
    authDomain: "beeroverview-f6a42.firebaseapp.com",
    databaseURL: "https://beeroverview-f6a42.firebaseio.com",
    projectId: "beeroverview-f6a42",
    storageBucket: "beeroverview-f6a42.appspot.com",
    messagingSenderId: "434103269302",
    appId: "1:434103269302:web:39b16f7708c894654ef317"
};
// Initialisere firebase og database referencer
firebase.initializeApp(_firebaseConfig);
const _db = firebase.firestore();
