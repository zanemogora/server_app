const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");

var score9 = localStorage.getItem("userscore5");
var score10 = localStorage.getItem("computerscore5");
userScore_span.innerHTML = score9;
computerScore_span.innerHTML = score10;

var countClicks1 = localStorage.getItem("clickcounter1");
console.log(countClicks1);

var countClicks2 = localStorage.getItem("clickcounter2");
console.log(countClicks2);

var countClicks3 = localStorage.getItem("clickcounter3");
console.log(countClicks3);

var countClicks4 = localStorage.getItem("clickcounter4");
console.log(countClicks4);

var countClicks5 = localStorage.getItem("clickcounter5");
console.log(countClicks5);

var countClicksSummary1kolo = parseInt(countClicks1|| 0) + parseInt(countClicks2|| 0) + parseInt(countClicks3|| 0) + parseInt(countClicks4|| 0) + parseInt(countClicks5|| 0);

localStorage.setItem("clickcountersummary1kolo", countClicksSummary1kolo);
//console.log("Pocet kliknuti na tlacidlo PLAY cez 1.kolo = ",countClicksSummary1kolo);

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