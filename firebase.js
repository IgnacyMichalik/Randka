import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyBCTbhSHMnb_rUCheIhGJtkR8xP3XQs7gY",

    authDomain: "randka-73f60.firebaseapp.com",

    projectId: "randka-73f60",

    storageBucket: "randka-73f60.firebasestorage.app",

    messagingSenderId: "968294883564",

    appId: "1:968294883564:web:6639f7f73b1d839cbc85c9"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);