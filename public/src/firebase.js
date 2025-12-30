// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBkyidh6MQfJ5vHNsz2NaG-3klHUcw",
    authDomain: "peace-kimathi-3d.firebaseapp.com",
    projectId: "peace-kimathi-3d",
    storageBucket: "peace-kimathi-3d.appspot.com",  // Fixed storage bucket URL
    messagingSenderId: "976358184356",
    appId: "1:976358184356:web:7c4c47260f7851d23a1d31",
    measurementId: "G-BKH6C0J2WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional, only if you are using analytics)
const analytics = getAnalytics(app);

export { app, analytics };
