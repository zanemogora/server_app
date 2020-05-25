const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");

var score38 = localStorage.getItem("userscore20");
var score39 = localStorage.getItem("computerscore20");
userScore_span.innerHTML = score38;
computerScore_span.innerHTML = score39;

var countClicks16 = localStorage.getItem("clickcounter16");
console.log(countClicks16);

var countClicks17 = localStorage.getItem("clickcounter17");
console.log(countClicks17);

var countClicks18 = localStorage.getItem("clickcounter18");
console.log(countClicks18);

var countClicks19 = localStorage.getItem("clickcounter19");
console.log(countClicks19);

var countClicks20 = localStorage.getItem("clickcounter20");
console.log(countClicks20);

var countClicksSummary4kolo = parseInt(countClicks16 || 0)  + parseInt(countClicks17|| 0) + parseInt(countClicks18|| 0) + parseInt(countClicks19|| 0) + parseInt(countClicks20|| 0);

localStorage.setItem("clickcountersummary4kolo", countClicksSummary4kolo);
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