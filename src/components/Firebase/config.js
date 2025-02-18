// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAqLVW8iMBGhNHLdzSpC1nBOEQfHCAoNO8",
	authDomain: "login-dashboard-project.firebaseapp.com",
	projectId: "login-dashboard-project",
	storageBucket: "login-dashboard-project.firebasestorage.app",
	messagingSenderId: "315931750618",
	appId: "1:315931750618:web:4f0be345363cdbed97f5e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;