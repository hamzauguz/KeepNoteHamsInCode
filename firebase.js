// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwOVahqWdmINaou2bl3AhmjxNhkSWF8cI",
  authDomain: "loginapp-596a0.firebaseapp.com",
  databaseURL: "https://loginapp-596a0-default-rtdb.firebaseio.com",
  projectId: "loginapp-596a0",
  storageBucket: "loginapp-596a0.appspot.com",
  messagingSenderId: "136136872803",
  appId: "1:136136872803:web:db44715184a0ad47a43956"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}



const auth = firebase.auth()

export { auth };