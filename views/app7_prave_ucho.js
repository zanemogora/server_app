let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const modre_auto_div = document.getElementById("lopta_lopticka");
const bicykel_div = document.getElementById("ruka");
const lietadlo_lietadielko_div = document.getElementById("kon_konik");
const autobus_div = document.getElementById("kvet_kvietok");

const play_btn = document.getElementById("playbtn");

var countClicks7 = 0;
function clickcounter() {
    countClicks7++;
    console.log(countClicks7);
    localStorage.setItem("clickcounter7", countClicks7);

}


var score12 = localStorage.getItem("userscore6");
var score13 = localStorage.getItem("computerscore6");
userScore_span.innerHTML = score12;
computerScore_span.innerHTML = score13;

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
    const choices =["lopta_lopticka_sound","ruka_sound","kon_konik_sound", "kvet_kvietok_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score12++;
    userScore_span.innerHTML = score12;
    computerScore_span.innerHTML = score13;
    localStorage.setItem("userscore7", score12);
    localStorage.setItem("computerscore7", score13);


    
}

//prehra
function lose(userChoice, computerChoice){
    
    score13++;
    userScore_span.innerHTML = score12;
    computerScore_span.innerHTML = score13;
    localStorage.setItem("userscore7", score12);
    localStorage.setItem("computerscore7", score13);
    

    
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "lopta_loptickalopta_lopticka_sound":
            case "rukaruka_sound":
            case "kon_konikkon_konik_sound":
            case "kvet_kvietokkvet_kvietok_sound":
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
    
    play_btn.addEventListener('click', function() {
       if (computerChoice == 'lopta_lopticka_sound') {
            var audio = new Audio('audio_prave_ucho/36_lopta_lopticka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'ruka_sound') {
            var audio = new Audio('audio_prave_ucho/42a_ruka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'kon_konik_sound') {
            var audio = new Audio('audio_prave_ucho/17_kon_konik.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'kvet_kvietok_sound') {
            var audio = new Audio('audio_prave_ucho/37_kvietok.wav');
            audio.play();
            playFunc(audio, 1);
       }
    })


    modre_auto_div.addEventListener('click', function() {
        game("lopta_lopticka", computerChoice);
    })

    bicykel_div.addEventListener('click', function() {
        game("ruka", computerChoice);
    })

    lietadlo_lietadielko_div.addEventListener('click', function() {
        game("kon_konik", computerChoice);
    })

    autobus_div.addEventListener('click', function() {
        game("kvet_kvietok", computerChoice);
    })

    
}

main();