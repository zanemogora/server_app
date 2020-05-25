let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const cervene_auto_div = document.getElementById("strom_stromcek");
const cervena_div = document.getElementById("mys_myska");
const jablko_jablcko_div = document.getElementById("postel_postielka");
const kvet_kvietok_div = document.getElementById("banan_bananik");

const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");

var countClicks15 = 0;
function clickcounter() {
    countClicks15++;
    console.log(countClicks15);
    localStorage.setItem("clickcounter15", countClicks15);

}

//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_tretie_user = localStorage.getItem("userscore13");
var score_tretie_computer = localStorage.getItem("computerscore13");
console.log("User:Computer tretie kolo =>" + score_tretie_user,score_tretie_computer);

//kvoli dalsiemu inkrementovaniu score
var score28 = localStorage.getItem("userscore14");
var score29 = localStorage.getItem("computerscore14");
console.log("User:Computer stvrte kolo =>" + score28,score29);
userScore_span.innerHTML = score28;
computerScore_span.innerHTML = score29;

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
    const choices =["strom_stromcek_sound","mys_myska_sound","postel_postielka_sound", "banan_bananik_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score28++;
    userScore_span.innerHTML = score28;
    computerScore_span.innerHTML = score29;
    localStorage.setItem("userscore15", score28);
    localStorage.setItem("computerscore15", score29);


}

//prehra
function lose(userChoice, computerChoice){

    score29++;
    userScore_span.innerHTML = score28;
    computerScore_span.innerHTML = score29;
    localStorage.setItem("userscore15", score28);
    localStorage.setItem("computerscore15", score29);
  

}


//logika hry
function game(userChoice, computerChoice){    
    
    //console.log("pouzivatel vybral =>" + userChoice);
    //console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
            case "strom_stromcekstrom_stromcek_sound":
            case "mys_myskamys_myska_sound":
            case "postel_postielkapostel_postielka_sound":
            case "banan_bananikbanan_bananik_sound":
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
    
  /*  back_btn.addEventListener('click', function() {
        console.log("STLACIL SI BACK");
        
        if (score28 > score_tretie_user) {
            score28--;
            localStorage.setItem("userscore5", score28);
        }

        if (score29 > score_tretie_computer) {
            score29--;
            localStorage.setItem("computerscore5", score29);
        }

        
    })*/

    playbtn.addEventListener('click', function() {
       if (computerChoice == 'strom_stromcek_sound') {
            var audio = new Audio('audio_lave_ucho/38_strom_stromcek.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'mys_myska_sound') {
            var audio = new Audio('audio_lave_ucho/19_mys_myska.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'postel_postielka_sound') {
            var audio = new Audio('audio_lave_ucho/39_postel_postielka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'banan_bananik_sound') {
            var audio = new Audio('audio_lave_ucho/47_banan_bananik.wav');
            audio.play();
            playFunc(audio, 1);
       }
    })


    cervene_auto_div.addEventListener('click', function() {
        game("strom_stromcek", computerChoice);
    })

    cervena_div.addEventListener('click', function() {
        game("mys_myska", computerChoice);
    })

    jablko_jablcko_div.addEventListener('click', function() {
        game("postel_postielka", computerChoice);
    })

    kvet_kvietok_div.addEventListener('click', function() {
        game("banan_bananik", computerChoice);
    }) 
}

main();