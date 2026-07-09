function checkPassword(){

    const password = document.getElementById("password").value;

  if (password === "TY" || password === "Ty" || password === "ty") {
        window.location.href = "zagadka2.html";
    }

    else{

        document.getElementById("error").innerHTML =
            "No już kto jak kto ale TY tego nie wiesz";

    }

}
function yesAnswer() {

    window.location.href = "sukces.html";

};
let scale = 1;

function noAnswer(){

    const button = document.getElementById("noButton");

    document.getElementById("message").innerHTML =
    "❌ No serio zobacz na tego smutnego słodziaka 😉";

    document.getElementById("funnyImage").style.display = "block";

    document.getElementById("music").play();

    scale -= 0.08;

    if(scale < 0.35){
        scale = 0.35;
    }

    button.style.transform = `scale(${scale})`;

    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
 button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}

function showOther(){

    document.getElementById("otherBox").style.display = "block";

}



function sendOther(){
     const propozycja = document.getElementById("otherDate").value;

    localStorage.setItem("randka", propozycja);

    window.location.href = "termin.html";

    odpowiedz.randka = "Inne";

    odpowiedz.innaPropozycja =
        document.getElementById("otherDate").value;

    console.log(odpowiedz);
    document.getElementById("otherBox").classList.remove("hidden");
    document.getElementById("otherBox").style.display = "block";

}
function wybierzRandke(nazwa){

    localStorage.setItem("randka", nazwa);

    if(nazwa === "Kolacja w restauracji"){
        window.location.href = "menu.html";
    }else{
        window.location.href = "termin.html";
    }

}
window.addEventListener("load", function(){

    const title = document.getElementById("title");

    if(title){

        const randka = localStorage.getItem("randka");

        title.innerHTML = + randka ;

    }

});




// Pokazanie wybranej randki
window.addEventListener("load", function () {

    const title = document.getElementById("title");


    const date = localStorage.getItem("date");
    const type = localStorage.getItem("type");

    const dateElement = document.getElementById("date");
    const typeElement = document.getElementById("type");


    if(dateElement){
        dateElement.textContent = date || "Brak daty";
    }


    if(typeElement){
        typeElement.textContent = type || "";
    }

    if (title) {

        const randka = localStorage.getItem("randka");

        title.innerHTML =  randka + "</br>";

    }

    // Uruchomienie kalendarza
    flatpickr("#datePicker", {

        locale: "pl",

        enableTime: true,

        time_24hr: true,

        dateFormat: "d.m.Y H:i",

        minDate: "today"

    });

});
async function saveDate(){

    const date = document.getElementById("datePicker").value;

    if(date === ""){
        document.getElementById("Fdate").innerHTML =
        "Najpierw wybierz datę 😊";

        return;
    }


    localStorage.setItem("date", date);


    await window.zapiszDoFirebase();


    window.location.href="podsumowanie.html";

}


async function zapiszDoFirebase(){

    const dane = {

        randka: localStorage.getItem("randka"),
        restauracja: localStorage.getItem("restauracja"),
        termin: localStorage.getItem("date"),
        dataDodania: new Date()

    };


    try{

        await addDoc(collection(db,"randki"), dane);

        console.log("Zapisano");

    }
    catch(e){

        console.error(e);

    }

}


window.zapiszDoFirebase = zapiszDoFirebase;

console.log("firebaseFunctions działa");






