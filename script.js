

function checkPassword(){

    const password = document.getElementById("password").value;

    if(password === "TY"|| "ty" || "Ty"){
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
    "❌ Nie trafiłaś! Spróbuj jeszcze raz 😉";

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
function wybierzRandke(nazwa){

    odpowiedz.randka = nazwa;

    console.log(odpowiedz);

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

    window.location.href = "termin.html";

}
window.addEventListener("load", function(){

    const title = document.getElementById("title");

    if(title){

        const randka = localStorage.getItem("randka");

        title.innerHTML = + randka;

    }

});

// Pokazanie wybranej randki
window.addEventListener("load", function () {

    const title = document.getElementById("title");

    if (title) {

        const randka = localStorage.getItem("randka");

        title.innerHTML =  randka + "</b>";

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

function saveDate() {

    const date = document.getElementById("datePicker").value;

    if (date === "") {
        alert("Najpierw wybierz termin ❤️");
        return;
    }

    // jeśli wcześniej wybrałeś formę randki
    localStorage.setItem("date", date);

    // np. jeśli masz zmienną z wybraną formą
    // localStorage.setItem("type", selectedDateType);

    window.location.href = "podsumowanie.html";
}
