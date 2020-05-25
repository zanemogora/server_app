let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("postel_postielka");
const babika_div = document.getElementById("nos");
const babika_spi_div = document.getElementById("kvet_kvietok");

const play_btn = document.getElementById("playbtn");

var countClicks17 = 0;
function clickcounter() {
    countClicks17++;
    console.log(countClicks17);
    localStorage.setItem("clickcounter17", countClicks17);

}

//kvoli dalsiemu inkrementovaniu score
var score32 = localStorage.getItem("userscore16");
var score33 = localStorage.getItem("computerscore16");
userScore_span.innerHTML = score32;
computerScore_span.innerHTML = score33;

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
    const choices =["postel_postielka_sound","nos_sound","kvet_kvietok_sound"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score32++;
    userScore_span.innerHTML = score32;
    computerScore_span.innerHTML = score33;
    localStorage.setItem("userscore17", score32);
    localStorage.setItem("computerscore17", score33);


    
}

//prehra
function lose(userChoice, computerChoice){
    
    score33++;
    userScore_span.innerHTML = score32;
    computerScore_span.innerHTML = score33;
    localStorage.setItem("userscore17", score32);
    localStorage.setItem("computerscore17", score33);
    

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "postel_postielkapostel_postielka_sound":
            case "nosnos_sound":
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
       if (computerChoice == 'postel_postielka_sound') {
            var audio = new Audio('audio_lave_ucho/39_postel_postielka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'nos_sound') {
            var audio = new Audio('audio_lave_ucho/45_nos.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'kvet_kvietok_sound') {
            var audio = new Audio('audio_lave_ucho/37_kvietok.wav');
            audio.play();
            playFunc(audio, 1);
       }

    })


    babika_place_div.addEventListener('click', function() {
        game("postel_postielka", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("nos", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("kvet_kvietok", computerChoice);
    })
 
}

main();