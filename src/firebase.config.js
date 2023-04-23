import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAOo7UZ0CeJnGB2tTnkwnu-jOa9Gkn1eHg",
    authDomain: "restaurantapp-31b15.firebaseapp.com",
    databaseURL: "https://restaurantapp-31b15-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-31b15",
    storageBucket: "restaurantapp-31b15.appspot.com",
    messagingSenderId: "79645616995",
    appId: "1:79645616995:web:9fef89107c685d50bc0156"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }
