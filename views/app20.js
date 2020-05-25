let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const cervene_auto_div = document.getElementById("auto_auticko");
const cervena_div = document.getElementById("ruka");
const jablko_jablcko_div = document.getElementById("chlieb_chlebik");
const kvet_kvietok_div = document.getElementById("kon_konik");

const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");


var countClicks20 = 0;
function clickcounter() {
    countClicks20++;
    console.log(countClicks20);
    localStorage.setItem("clickcounter20", countClicks20);

}

//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_tretie_user = localStorage.getItem("userscore18");
var score_tretie_computer = localStorage.getItem("computerscore18");
console.log("User:Computer tretie kolo =>" + score_tretie_user,score_tretie_computer);

//kvoli dalsiemu inkrementovaniu score
var score38 = localStorage.getItem("userscore19");
var score39 = localStorage.getItem("computerscore19");
console.log("User:Computer stvrte kolo =>" + score38,score39);
userScore_span.innerHTML = score38;
computerScore_span.innerHTML = score39;

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
    const choices =["auto_auticko_sound","ruka_sound","chlieb_chlebik_sound", "kon_konik_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score38++;
    userScore_span.innerHTML = score38;
    computerScore_span.innerHTML = score39;
    localStorage.setItem("userscore20", score38);
    localStorage.setItem("computerscore20", score39);


}

//prehra
function lose(userChoice, computerChoice){

    score39++;
    userScore_span.innerHTML = score38;
    computerScore_span.innerHTML = score39;
    localStorage.setItem("userscore20", score38);
    localStorage.setItem("computerscore20", score39);
  

}


//logika hry
function game(userChoice, computerChoice){    
    
    //console.log("pouzivatel vybral =>" + userChoice);
    //console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
            case "auto_autickoauto_auticko_sound":
            case "rukaruka_sound":
            case "chlieb_chlebikchlieb_chlebik_sound":
            case "kon_konikkon_konik_sound":
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
        
        if (score38 > score_tretie_user) {
            score38--;
            localStorage.setItem("userscore5", score38);
        }

        if (score39 > score_tretie_computer) {
            score39--;
            localStorage.setItem("computerscore5", score39);
        }

        
    })*/

    playbtn.addEventListener('click', function() {
       if (computerChoice == 'auto_auticko_sound') {
            var audio = new Audio('audio/2c_auto_auticko.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'ruka_sound') {
            var audio = new Audio('audio/42b_ruka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'chlieb_chlebik_sound') {
            var audio = new Audio('audio/48_chlieb_chlebik.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'kon_konik_sound') {
            var audio = new Audio('audio/17_kon_konik.wav');
            audio.play();
            playFunc(audio, 1);
       }
    })


    cervene_auto_div.addEventListener('click', function() {
        game("auto_auticko", computerChoice);
    })

    cervena_div.addEventListener('click', function() {
        game("ruka", computerChoice);
    })

    jablko_jablcko_div.addEventListener('click', function() {
        game("chlieb_chlebik", computerChoice);
    })

    kvet_kvietok_div.addEventListener('click', function() {
        game("kon_konik", computerChoice);
    }) 
}

main();