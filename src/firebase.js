import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBNZfI5pxSlZq7VMQkdRbmGCa59GSrbU-Q',
  authDomain: 'jmechristian-digital.firebaseapp.com',
  databaseURL: 'https://jmechristian-digital.firebaseio.com',
  projectId: 'jmechristian-digital',
  storageBucket: 'jmechristian-digital.appspot.com',
  messagingSenderId: '650654582673',
  appId: '1:650654582673:web:879c7906429b28a3a2bc30',
  measurementId: 'G-6RSYGJEX3Y'
});

export default app;
