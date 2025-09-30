// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs-ATvOVyXIztDvc3hkuNe4_cqOajjwA0",
  authDomain: "danhoafashion-project.firebaseapp.com",
  projectId: "danhoafashion-project",
  storageBucket: "danhoafashion-project.firebasestorage.app",
  messagingSenderId: "892481314903",
  appId: "1:892481314903:web:9bf777a8e9d3d491db8312",
  measurementId: "G-YM3P0PTL3N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
