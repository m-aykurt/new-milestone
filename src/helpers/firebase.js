import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBFmt8tld4H10DriEBRJH_-2vYYuKdCbos",
    authDomain: "milestone-blog.firebaseapp.com",
    projectId: "milestone-blog",
    storageBucket: "milestone-blog.appspot.com",
    messagingSenderId: "958984427556",
    appId: "1:958984427556:web:3eaff7c1f216b0c6d460b1"
});

export const auth = app.auth();
export default app;
