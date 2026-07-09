import { db } from "./firebase.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


window.zapiszDoFirebase = async function(){

    const dane = {

        randka: localStorage.getItem("randka"),
        restauracja: localStorage.getItem("restauracja"),
        termin: localStorage.getItem("date"),
        dataDodania: new Date()

    };


    await addDoc(collection(db, "randki"), dane);

    console.log("Zapisano do Firebase");

};


console.log("firebaseFunctions załadowany");