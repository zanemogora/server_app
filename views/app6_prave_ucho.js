let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const modre_auto_div = document.getElementById("macka_macicka");
const bicykel_div = document.getElementById("ruka");
const lietadlo_lietadielko_div = document.getElementById("kvet_kvietok");
const autobus_div = document.getElementById("dzus_dzusik");

const play_btn = document.getElementById("playbtn");

var countClicks6 = 0;
function clickcounter() {
    countClicks6++;
    console.log(countClicks6);
    localStorage.setItem("clickcounter6", countClicks6);

}

var score10 = 0;
var score11 = 0;

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
    const choices =["macka_macicka_sound","ruka_sound","kvet_kvietok_sound", "dzus_dzusik_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score10++;
    userScore_span.innerHTML = score10;
    computerScore_span.innerHTML = score11;
    localStorage.setItem("userscore6", score10);
    localStorage.setItem("computerscore6", score11);


    
}

//prehra
function lose(userChoice, computerChoice){
    
    score11++;
    userScore_span.innerHTML = score10;
    computerScore_span.innerHTML = score11;
    localStorage.setItem("userscore6", score10);
    localStorage.setItem("computerscore6", score11);


}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "macka_macickamacka_macicka_sound":
            case "rukaruka_sound":
            case "kvet_kvietokkvet_kvietok_sound":
            case "dzus_dzusikdzus_dzusik_sound":
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
       if (computerChoice == 'macka_macicka_sound') {
            var audio = new Audio('audio_prave_ucho/10_macka_macicka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'ruka_sound') {
            var audio = new Audio('audio_prave_ucho/42a_ruka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'kvet_kvietok_sound') {
            var audio = new Audio('audio_prave_ucho/37_kvietok.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'dzus_dzusik_sound') {
            var audio = new Audio('audio_prave_ucho/49b_dzus_dzusik.wav');
            audio.play();
            playFunc(audio, 1);
       }
    })


    modre_auto_div.addEventListener('click', function() {
        game("macka_macicka", computerChoice);
    })

    bicykel_div.addEventListener('click', function() {
        game("ruka", computerChoice);
    })

    lietadlo_lietadielko_div.addEventListener('click', function() {
        game("kvet_kvietok", computerChoice);
    })

    autobus_div.addEventListener('click', function() {
        game("dzus_dzusik", computerChoice);
    })

    
}

main();