import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
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

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
