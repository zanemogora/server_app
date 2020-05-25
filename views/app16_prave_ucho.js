let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("sova_sovicka");
const babika_div = document.getElementById("krava_kravicka");
const babika_spi_div = document.getElementById("noha");

//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");

var countClicks16 = 0;
function clickcounter() {
    countClicks16++;
    console.log(countClicks16);
    localStorage.setItem("clickcounter16", countClicks16);

}

var score30 = 0;
var score31 = 0;

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
    const choices =["sova_sovicka_sound","krava_kravicka_sound","noha_sound"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score30++;
    userScore_span.innerHTML = score30;
    computerScore_span.innerHTML = score31;
    localStorage.setItem("userscore16", score30);
    localStorage.setItem("computerscore16", score31);


    
}

//prehra
function lose(userChoice, computerChoice){
    
    score31++;
    userScore_span.innerHTML = score30;
    computerScore_span.innerHTML = score31;
    localStorage.setItem("userscore16", score30);
    localStorage.setItem("computerscore16", score31);

    

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "sova_sovickasova_sovicka_sound":
            case "krava_kravickakrava_kravicka_sound":
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
    
    play_btn.addEventListener('click', function() {
       if (computerChoice == 'sova_sovicka_sound') {
            var audio = new Audio('audio_prave_ucho/18_sova_sovicka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'krava_kravicka_sound') {
            var audio = new Audio('audio_prave_ucho/12_krava_kravicka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'noha_sound') {
            var audio = new Audio('audio_prave_ucho/43_noha.wav');
            audio.play();
            playFunc(audio, 1);
       }

    })


    babika_place_div.addEventListener('click', function() {
        game("sova_sovicka", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("krava_kravicka", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("noha", computerChoice);
    })
 
}

main();