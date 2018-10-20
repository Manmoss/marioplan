import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB6I6Ed9PrtTeAEgzX-xeoC8qIpNyyZW6E",
  authDomain: "marioplan-71461.firebaseapp.com",
  databaseURL: "https://marioplan-71461.firebaseio.com",
  projectId: "marioplan-71461",
  storageBucket: "marioplan-71461.appspot.com",
  messagingSenderId: "695082384389"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;