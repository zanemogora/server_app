const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");

var score28 = localStorage.getItem("userscore15");
var score29 = localStorage.getItem("computerscore15");
userScore_span.innerHTML = score28;
computerScore_span.innerHTML = score29;

var countClicks11 = localStorage.getItem("clickcounter11");
console.log(countClicks11);

var countClicks12 = localStorage.getItem("clickcounter12");
console.log(countClicks12);

var countClicks13 = localStorage.getItem("clickcounter13");
console.log(countClicks13);

var countClicks14 = localStorage.getItem("clickcounter14");
console.log(countClicks14);

var countClicks15 = localStorage.getItem("clickcounter15");
console.log(countClicks15);

var countClicksSummary3kolo = parseInt(countClicks11 || 0)  + parseInt(countClicks12|| 0) + parseInt(countClicks13|| 0) + parseInt(countClicks14|| 0) + parseInt(countClicks15|| 0);

localStorage.setItem("clickcountersummary3kolo", countClicksSummary3kolo);
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