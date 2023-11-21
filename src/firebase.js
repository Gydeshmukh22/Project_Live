import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBg18YRIo8fzQf5L2EfMu_KeMRSgwsm6Cg",
    authDomain: "datatypes-2c551.firebaseapp.com",
    projectId: "datatypes-2c551",
    storageBucket: "datatypes-2c551.appspot.com",
    messagingSenderId: "572607796987",
    appId: "1:572607796987:web:ff38450fba538ed19c025e",
    measurementId: "G-Y6KYXQH5DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Export componates for use in another file**
export { db, storage, auth, analytics };
