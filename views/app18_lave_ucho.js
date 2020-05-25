let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const cervene_auto_div = document.getElementById("pes_psik_havo");
const cervena_div = document.getElementById("zaba_zabka");
const jablko_jablcko_div = document.getElementById("dzus_dzusik");


const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");

var countClicks18 = 0;
function clickcounter() {
    countClicks18++;
    console.log(countClicks18);
    localStorage.setItem("clickcounter18", countClicks18);

}

//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_prve_user = localStorage.getItem("userscore16");
var score_prve_computer = localStorage.getItem("computerscore16");
console.log("User:Computer prve kolo =>" + score_prve_user,score_prve_computer);

//kvoli dalsiemu inkrementovaniu score
var score34 = localStorage.getItem("userscore17");
var score35 = localStorage.getItem("computerscore17");
console.log("User:Computer druhe kolo =>" + score34,score35);
userScore_span.innerHTML = score34;
computerScore_span.innerHTML = score35;

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
    const choices =["pes_psik_havo_sound","zaba_zabka_sound","dzus_dzusik_sound"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score34++;
    userScore_span.innerHTML = score34;
    computerScore_span.innerHTML = score35;
    localStorage.setItem("userscore18", score34);
    localStorage.setItem("computerscore18", score35);


}

//prehra
function lose(userChoice, computerChoice){

    score35++;
    userScore_span.innerHTML = score34;
    computerScore_span.innerHTML = score35;
    localStorage.setItem("userscore18", score34);
    localStorage.setItem("computerscore18", score35);
  

}


//logika hry
function game(userChoice, computerChoice){    
    
    //console.log("pouzivatel vybral =>" + userChoice);
    //console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
            case "pes_psik_havopes_psik_havo_sound":
            case "zaba_zabkazaba_zabka_sound":
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
    

   /* back_btn.addEventListener('click', function() {
        console.log("STLACIL SI BACK");
        
        if (score34 > score_prve_user) {
            score34--;
            localStorage.setItem("userscore", score34);
        }

        if (score35 > score_prve_computer) {
            score35--;
            localStorage.setItem("computerscore", score35);
        }

        
    })*/

    playbtn.addEventListener('click', function() {
       if (computerChoice == 'pes_psik_havo_sound') {
            var audio = new Audio('audio_lave_ucho/11a_pes_psik_havo.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'zaba_zabka_sound') {
            var audio = new Audio('audio_lave_ucho/16_zaba_zabka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'dzus_dzusik_sound') {
            var audio = new Audio('audio_lave_ucho/49a_dzus_dzusik.wav');
            audio.play();
            playFunc(audio, 1);
       }

    })


    cervene_auto_div.addEventListener('click', function() {
        game("pes_psik_havo", computerChoice);
    })

    cervena_div.addEventListener('click', function() {
        game("zaba_zabka", computerChoice);
    })

    jablko_jablcko_div.addEventListener('click', function() {
        game("dzus_dzusik", computerChoice);
    })

}

main();