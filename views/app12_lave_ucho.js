let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("sova_sovicka");
const babika_div = document.getElementById("pes_psik_havo");
const babika_spi_div = document.getElementById("noha");

const play_btn = document.getElementById("playbtn");
var countClicks12 = 0;
function clickcounter() {
    countClicks12++;
    console.log(countClicks12);
    localStorage.setItem("clickcounter12", countClicks12);

}
//kvoli dalsiemu inkrementovaniu score
var score22 = localStorage.getItem("userscore11");
var score23 = localStorage.getItem("computerscore11");
userScore_span.innerHTML = score22;
computerScore_span.innerHTML = score23;

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
    const choices =["sova_sovicka_sound","pes_psik_havo_sound","noha_sound"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score22++;
    userScore_span.innerHTML = score22;
    computerScore_span.innerHTML = score23;
    localStorage.setItem("userscore12", score22);
    localStorage.setItem("computerscore12", score23);


    
}

//prehra
function lose(userChoice, computerChoice){
    
    score23++;
    userScore_span.innerHTML = score22;
    computerScore_span.innerHTML = score23;
    localStorage.setItem("userscore12", score22);
    localStorage.setItem("computerscore12", score23);
    

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "sova_sovickasova_sovicka_sound":
            case "pes_psik_havopes_psik_havo_sound":
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
            var audio = new Audio('audio_lave_ucho/18_sova_sovicka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'pes_psik_havo_sound') {
            var audio = new Audio('audio_lave_ucho/11a_pes_psik_havo.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'noha_sound') {
            var audio = new Audio('audio_lave_ucho/43_noha.wav');
            audio.play();
            playFunc(audio, 1);
       }

    })


    babika_place_div.addEventListener('click', function() {
        game("sova_sovicka", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("pes_psik_havo", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("noha", computerChoice);
    })
 
}

main();