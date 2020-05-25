let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const cervene_auto_div = document.getElementById("medved_maco");
const cervena_div = document.getElementById("strom_stromcek");
const jablko_jablcko_div = document.getElementById("ucho");
const kvet_kvietok_div = document.getElementById("nos");

const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");

var countClicks24 = 0;
function clickcounter() {
    countClicks24++;
    console.log(countClicks24);
    localStorage.setItem("clickcounter24", countClicks24);

}
//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_druhe_user = localStorage.getItem("userscore22");
var score_druhe_computer = localStorage.getItem("computerscore22");
console.log("User:Computer druhe kolo =>" + score_druhe_user,score_druhe_computer);

//kvoli dalsiemu inkrementovaniu score
var score45 = localStorage.getItem("userscore23");
var score46 = localStorage.getItem("computerscore23");
console.log("User:Computer tretie kolo =>" + score45,score46);
userScore_span.innerHTML = score45;
computerScore_span.innerHTML = score46;

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
    const choices =["medved_maco_sound","strom_stromcek_sound","ucho_sound", "nos_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score45++;
    userScore_span.innerHTML = score45;
    computerScore_span.innerHTML = score46;
    localStorage.setItem("userscore24", score45);
    localStorage.setItem("computerscore24", score46);


}

//prehra
function lose(userChoice, computerChoice){

    score46++;
    userScore_span.innerHTML = score45;
    computerScore_span.innerHTML = score46;
    localStorage.setItem("userscore24", score45);
    localStorage.setItem("computerscore24", score46);
  

}


//logika hry
function game(userChoice, computerChoice){    
    
    //console.log("pouzivatel vybral =>" + userChoice);
    //console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
            case "medved_macomedved_maco_sound":
            case "strom_stromcekstrom_stromcek_sound":
            case "uchoucho_sound":
            case "nosnos_sound":
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
        
        if (score45 > score_druhe_user) {
            score45--;
            localStorage.setItem("userscore24", score45);
        }

        if (score46 > score_druhe_computer) {
            score46--;
            localStorage.setItem("computerscore24", score46);
        }

        
    })*/

    playbtn.addEventListener('click', function() {
       if (computerChoice == 'medved_maco_sound') {
            var audio = new Audio('audio_prave_ucho/13_medved_maco.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'strom_stromcek_sound') {
            var audio = new Audio('audio_prave_ucho/38_strom_stromcek.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'ucho_sound') {
            var audio = new Audio('audio_prave_ucho/44_ucho.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'nos_sound') {
            var audio = new Audio('audio_prave_ucho/45_nos.wav');
            audio.play();
            playFunc(audio, 1);
       }
    })


    cervene_auto_div.addEventListener('click', function() {
        game("medved_maco", computerChoice);
    })

    cervena_div.addEventListener('click', function() {
        game("strom_stromcek", computerChoice);
    })

    jablko_jablcko_div.addEventListener('click', function() {
        game("ucho", computerChoice);
    })

    kvet_kvietok_div.addEventListener('click', function() {
        game("nos", computerChoice);
    }) 
}

main();