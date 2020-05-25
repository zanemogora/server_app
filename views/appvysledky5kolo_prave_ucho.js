const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");

var score47 = localStorage.getItem("userscore25");
var score48 = localStorage.getItem("computerscore25");
userScore_span.innerHTML = score47;
computerScore_span.innerHTML = score48;

var countClicks21 = localStorage.getItem("clickcounter21");
console.log(countClicks21);

var countClicks22 = localStorage.getItem("clickcounter22");
console.log(countClicks22);

var countClicks23 = localStorage.getItem("clickcounter23");
console.log(countClicks23);

var countClicks24 = localStorage.getItem("clickcounter24");
console.log(countClicks24);

var countClicks25 = localStorage.getItem("clickcounter25");
console.log(countClicks25);

var countClicksSummary5kolo = parseInt(countClicks21 || 0)  + parseInt(countClicks22|| 0) + parseInt(countClicks23|| 0) + parseInt(countClicks24|| 0) + parseInt(countClicks25|| 0);

localStorage.setItem("clickcountersummary5kolo", countClicksSummary5kolo);
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