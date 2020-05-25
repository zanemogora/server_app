let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("strom_stromcek");
const babika_div = document.getElementById("postel_postielka");
const babika_spi_div = document.getElementById("chlieb_chlebik");

//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");


var countClicks10 = 0;
function clickcounter() {
    countClicks10++;
    console.log(countClicks10);
    localStorage.setItem("clickcounter10", countClicks10);

}



//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_tretie_user = localStorage.getItem("userscore8");
var score_tretie_computer = localStorage.getItem("computerscore8");
console.log("User:Computer tretie kolo =>" + score_tretie_user,score_tretie_computer);

//kvoli dalsiemu inkrementovaniu score
var score18 = localStorage.getItem("userscore9");
var score19 = localStorage.getItem("computerscore9");
console.log("User:Computer stvrte kolo =>" + score18,score19);
userScore_span.innerHTML = score18;
computerScore_span.innerHTML = score19;

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
    const choices =["strom_stromcek_sound","postel_postielka_sound","chlieb_chlebik_sound"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score18++;
    userScore_span.innerHTML = score18;
    computerScore_span.innerHTML = score19;
    localStorage.setItem("userscore10", score18);
    localStorage.setItem("computerscore10", score19);


}

//prehra
function lose(userChoice, computerChoice){
    
    score19++;
    userScore_span.innerHTML = score18;
    computerScore_span.innerHTML = score19;
    localStorage.setItem("userscore10", score18);
    localStorage.setItem("computerscore10", score19);
    

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "strom_stromcekstrom_stromcek_sound":
            case "postel_postielkapostel_postielka_sound":
            case "chlieb_chlebikchlieb_chlebik_sound":
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
       if (computerChoice == 'strom_stromcek_sound') {
            var audio = new Audio('audio/38_strom_stromcek.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'postel_postielka_sound') {
            var audio = new Audio('audio/39_postel_postielka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'chlieb_chlebik_sound') {
            var audio = new Audio('audio/48_chlieb_chlebik.wav');
            audio.play();
            playFunc(audio, 1);
       }

    })


    babika_place_div.addEventListener('click', function() {
        game("strom_stromcek", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("postel_postielka", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("chlieb_chlebik", computerChoice);
    })
 
}

main();