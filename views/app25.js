let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const cervene_auto_div = document.getElementById("pes_psik_havo");
const cervena_div = document.getElementById("ruka");
const jablko_jablcko_div = document.getElementById("kon_konik");
const kvet_kvietok_div = document.getElementById("noha");

const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");


var countClicks25 = 0;
function clickcounter() {
    countClicks25++;
    console.log(countClicks25);
    localStorage.setItem("clickcounter25", countClicks25);

}


//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_tretie_user = localStorage.getItem("userscore23");
var score_tretie_computer = localStorage.getItem("computerscore23");
console.log("User:Computer tretie kolo =>" + score_tretie_user,score_tretie_computer);

//kvoli dalsiemu inkrementovaniu score
var score47 = localStorage.getItem("userscore24");
var score48 = localStorage.getItem("computerscore24");
console.log("User:Computer stvrte kolo =>" + score47,score48);
userScore_span.innerHTML = score47;
computerScore_span.innerHTML = score48;

function confirmation() {
    var user_choice = window.confirm('Naozaj si prajete ukončiť hru a presunúť sa do úvodu aplikácie ?');
    if(user_choice==true) {
        window.location='index.html';  // you can also use element.submit() if your input type='submit' 
    } else {
        return false;
    }
}


//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["pes_psik_havo_sound","ruka_sound","kon_konik_sound", "noha_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score47++;
    userScore_span.innerHTML = score47;
    computerScore_span.innerHTML = score48;
    localStorage.setItem("userscore25", score47);
    localStorage.setItem("computerscore25", score48);


}

//prehra
function lose(userChoice, computerChoice){

    score48++;
    userScore_span.innerHTML = score47;
    computerScore_span.innerHTML = score48;
    localStorage.setItem("userscore25", score47);
    localStorage.setItem("computerscore25", score48);
  

}


//logika hry
function game(userChoice, computerChoice){    
    
    //console.log("pouzivatel vybral =>" + userChoice);
    //console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
            case "pes_psik_havopes_psik_havo_sound":
            case "rukaruka_sound":
            case "kon_konikkon_konik_sound":
            case "nohanoha_sound":
                win(userChoice, computerChoice);
                break;

            default:
                lose(userChoice, computerChoice);
                break;
    }

}

function playFunc(target, RepeatCount) {
    playbtn.disabled=true;
     var soundFunc = function(){
        RepeatCount--;
        target.currentTime = 0;
        if (RepeatCount>0)
            target.play();
        else{
           target.removeEventListener('ended', soundFunc);
            playbtn.disabled=false;
        }
    
    }
    target.addEventListener('ended', soundFunc)
    target.play();
} 

//akcie pri kliknuti na obrazky
function main(){
    const computerChoice=getComputerChoice();
    console.log("Computer choice =>" + computerChoice);

//funguje mi to tak ze vygenerujem premennu computerChoice o nejakej hodnote a drzim hodnotu aj pri zmene vstupu pouzivatela, este mi treba if (generovanahodnota) then zapni konkretny zvuk 
    
   /* back_btn.addEventListener('click', function() {
        console.log("STLACIL SI BACK");
        
        if (score47 > score_tretie_user) {
            score47--;
            localStorage.setItem("userscore25", score47);
        }

        if (score48 > score_tretie_computer) {
            score48--;
            localStorage.setItem("computerscore25", score48);
        }

        
    })*/

    playbtn.addEventListener('click', function() {
       if (computerChoice == 'pes_psik_havo_sound') {
            var audio = new Audio('audio/11a_pes_psik_havo.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'ruka_sound') {
            var audio = new Audio('audio/42b_ruka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'kon_konik_sound') {
            var audio = new Audio('audio/17_kon_konik.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'noha_sound') {
            var audio = new Audio('audio/43_noha.wav');
            audio.play();
            playFunc(audio, 1);
       }
    })


    cervene_auto_div.addEventListener('click', function() {
        game("pes_psik_havo", computerChoice);
    })

    cervena_div.addEventListener('click', function() {
        game("ruka", computerChoice);
    })

    jablko_jablcko_div.addEventListener('click', function() {
        game("kon_konik", computerChoice);
    })

    kvet_kvietok_div.addEventListener('click', function() {
        game("noha", computerChoice);
    }) 
}

main();