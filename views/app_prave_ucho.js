let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const cervene_auto_div = document.getElementById("cervene_auto");
const cervena_div = document.getElementById("cervena");
const jablko_jablcko_div = document.getElementById("jablko_jablcko");
const kvet_kvietok_div = document.getElementById("kvet_kvietok");

const play_btn = document.getElementById("playbtn");

var countClicks1 = 0;
function clickcounter() {
    countClicks1++;
    console.log(countClicks1);
    localStorage.setItem("clickcounter1", countClicks1);

}

var score = 0;
var score2 = 0;


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
    const choices =["cervene_auto_sound","cervena_sound","jablko_jablcko_sound", "kvet_kvietok_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score++;
    userScore_span.innerHTML = score;
    computerScore_span.innerHTML = score2;
    localStorage.setItem("userscore", score);
    localStorage.setItem("computerscore", score2);

    //window.location.replace('vyhra.html');



}

//prehra
function lose(userChoice, computerChoice){

    score2++;
    userScore_span.innerHTML = score;
    computerScore_span.innerHTML = score2;
    localStorage.setItem("userscore", score);
    localStorage.setItem("computerscore", score2);
  
    //window.location.replace('prehra.html');

}



//logika hry
function game(userChoice, computerChoice){    
    
    //console.log("pouzivatel vybral =>" + userChoice);
    //console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
            case "cervene_autocervene_auto_sound":
            case "cervenacervena_sound":
            case "jablko_jablckojablko_jablcko_sound":
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

    playbtn.addEventListener('click', function() {
       if (computerChoice == 'cervene_auto_sound') {
            var audio = new Audio('audio_prave_ucho/28_cervene auto.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'cervena_sound') {
            var audio = new Audio('audio_prave_ucho/6_cervena.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'jablko_jablcko_sound') {
            var audio = new Audio('audio_prave_ucho/46_jablko_jablcko.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'kvet_kvietok_sound') {
            var audio = new Audio('audio_prave_ucho/37_kvietok.wav');
            audio.play();
            playFunc(audio, 1);
       }
    })


    cervene_auto_div.addEventListener('click', function() {
        game("cervene_auto", computerChoice);
        document.getElementById("cervene_auto").disabled = true;
    })

    cervena_div.addEventListener('click', function() {
        game("cervena", computerChoice);
        document.getElementById("cervena").disabled = true;
    })

    jablko_jablcko_div.addEventListener('click', function() {
        game("jablko_jablcko", computerChoice);
        document.getElementById("jablko_jablcko").disabled = true;

    })

    kvet_kvietok_div.addEventListener('click', function() {
        game("kvet_kvietok", computerChoice);
        document.getElementById("kvet_kvietok").disabled = true;

    }) 
}

main();