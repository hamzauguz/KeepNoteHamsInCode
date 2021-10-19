import firebase from 'firebase'
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyCwOVahqWdmINaou2bl3AhmjxNhkSWF8cI",
    authDomain: "loginapp-596a0.firebaseapp.com",
    databaseURL: "https://loginapp-596a0-default-rtdb.firebaseio.com",
    projectId: "loginapp-596a0",
    storageBucket: "loginapp-596a0.appspot.com",
    messagingSenderId: "136136872803",
    appId: "1:136136872803:web:db44715184a0ad47a43956"
};
firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()
export default database