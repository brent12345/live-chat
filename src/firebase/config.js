import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBRrOG8-fUG4CdnNlsTVIOMU7eUb7SBA-w",
    authDomain: "udemy-vue-firebase-sites-26458.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-26458",
    storageBucket: "udemy-vue-firebase-sites-26458.appspot.com",
    messagingSenderId: "529744584462",
    appId: "1:529744584462:web:9ad3341c5adfcb9499015f"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()

  const projectFirestore = firebase.firestore()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectAuth, projectFirestore, timestamp}