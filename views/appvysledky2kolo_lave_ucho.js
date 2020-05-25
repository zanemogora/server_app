const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");

var score19 = localStorage.getItem("userscore10");
var score20 = localStorage.getItem("computerscore10");
userScore_span.innerHTML = score19;
computerScore_span.innerHTML = score20;


var countClicks6 = localStorage.getItem("clickcounter6");
console.log(countClicks6);

var countClicks7 = localStorage.getItem("clickcounter7");
console.log(countClicks7);

var countClicks8 = localStorage.getItem("clickcounter8");
console.log(countClicks8);

var countClicks9 = localStorage.getItem("clickcounter9");
console.log(countClicks9);

var countClicks10 = localStorage.getItem("clickcounter10");
console.log(countClicks10);

var countClicksSummary2kolo = parseInt(countClicks6 || 0)  + parseInt(countClicks7|| 0) + parseInt(countClicks8|| 0) + parseInt(countClicks9|| 0) + parseInt(countClicks10|| 0);

localStorage.setItem("clickcountersummary2kolo", countClicksSummary2kolo);
//console.log("Pocet kliknuti na tlacidlo PLAY cez 1.kolo = ", countClicksSummary2kolo);

function confirmation() {
    var user_choice = window.confirm('Naozaj si prajete ukončiť hru a presunúť sa do úvodu aplikácie ?');
    if(user_choice==true) {
        window.location='index.html';  // you can also use element.submit() if your input type='submit' 
    } else {
        return false;
    }
}

function main(){
}


main();