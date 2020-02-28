
import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD04iDTlyjqsOsaEgZKdo5N9tDA4DAE7XU",
  authDomain: "nuxt-firebase-vuex-tutorial.firebaseapp.com",
  databaseURL: "https://nuxt-firebase-vuex-tutorial.firebaseio.com",
  projectId: "nuxt-firebase-vuex-tutorial",
  storageBucket: "nuxt-firebase-vuex-tutorial.appspot.com",
  messagingSenderId: "695442144765",
  appId: "1:695442144765:web:4794ccc8a32a7e94762d94"
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const auth = firebase.auth()
export default firebase



