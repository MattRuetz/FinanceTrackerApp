// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCxa8cRRbppzC1AssDQY15GBFBLUo4VNLQ',
    authDomain: 'mymoney-8a33f.firebaseapp.com',
    projectId: 'mymoney-8a33f',
    storageBucket: 'mymoney-8a33f.appspot.com',
    messagingSenderId: '104558695895',
    appId: '1:104558695895:web:5f31faa695ca57261de792',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// init service
const db = getFirestore(app);
const projectAuth = getAuth(app);

export { db, projectAuth, analytics };
