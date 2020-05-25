let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("ucho");
const babika_div = document.getElementById("postel_postielka");
const babika_spi_div = document.getElementById("dom_domcek");
const noha_div = document.getElementById("noha");

const play_btn = document.getElementById("playbtn");

var countClicks22 = 0;
function clickcounter() {
    countClicks22++;
    console.log(countClicks22);
    localStorage.setItem("clickcounter22", countClicks22);

}
//kvoli dalsiemu inkrementovaniu score
var score41 = localStorage.getItem("userscore21");
var score42 = localStorage.getItem("computerscore21");
userScore_span.innerHTML = score41;
computerScore_span.innerHTML = score42;

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
    const choices =["ucho_sound","postel_postielka_sound","dom_domcek_sound", "noha_sound" ];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score41++;
    userScore_span.innerHTML = score41;
    computerScore_span.innerHTML = score42;
    localStorage.setItem("userscore22", score41);
    localStorage.setItem("computerscore22", score42);


    
}

//prehra
function lose(userChoice, computerChoice){
    
    score42++;
    userScore_span.innerHTML = score41;
    computerScore_span.innerHTML = score42;
    localStorage.setItem("userscore22", score41);
    localStorage.setItem("computerscore22", score42);
    

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "uchoucho_sound":
            case "postel_postielkapostel_postielka_sound":
            case "dom_domcekdom_domcek_sound":
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
       if (computerChoice == 'ucho_sound') {
            var audio = new Audio('audio_prave_ucho/44_ucho.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'postel_postielka_sound') {
            var audio = new Audio('audio_prave_ucho/39_postel_postielka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'dom_domcek_sound') {
            var audio = new Audio('audio_prave_ucho/33_dom_domcek.wav');
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
        game("ucho", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("postel_postielka", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("dom_domcek", computerChoice);
    })

    noha_div.addEventListener('click', function() {
        game("noha", computerChoice);
    })
 
}

main();