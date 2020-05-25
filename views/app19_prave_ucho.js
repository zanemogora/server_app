let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const cervene_auto_div = document.getElementById("sova_sovicka");
const cervena_div = document.getElementById("vlak_vlacik");
const jablko_jablcko_div = document.getElementById("nos");
const kvet_kvietok_div = document.getElementById("kvet_kvietok");

const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");


var countClicks19 = 0;
function clickcounter() {
    countClicks19++;
    console.log(countClicks19);
    localStorage.setItem("clickcounter19", countClicks19);

}

//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_druhe_user = localStorage.getItem("userscore17");
var score_druhe_computer = localStorage.getItem("computerscore17");
console.log("User:Computer druhe kolo =>" + score_druhe_user,score_druhe_computer);

//kvoli dalsiemu inkrementovaniu score
var score36 = localStorage.getItem("userscore18");
var score37 = localStorage.getItem("computerscore18");
console.log("User:Computer tretie kolo =>" + score36,score37);
userScore_span.innerHTML = score36;
computerScore_span.innerHTML = score37;

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
    const choices =["sova_sovicka_sound","vlak_vlacik_sound","nos_sound", "kvet_kvietok_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score36++;
    userScore_span.innerHTML = score36;
    computerScore_span.innerHTML = score37;
    localStorage.setItem("userscore19", score36);
    localStorage.setItem("computerscore19", score37);


}

//prehra
function lose(userChoice, computerChoice){

    score37++;
    userScore_span.innerHTML = score36;
    computerScore_span.innerHTML = score37;
    localStorage.setItem("userscore19", score36);
    localStorage.setItem("computerscore19", score37);
  

}


//logika hry
function game(userChoice, computerChoice){    
    
    //console.log("pouzivatel vybral =>" + userChoice);
    //console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
            case "sova_sovickasova_sovicka_sound":
            case "vlak_vlacikvlak_vlacik_sound":
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
    
   /* back_btn.addEventListener('click', function() {
        console.log("STLACIL SI BACK");
        
        if (score36 > score_druhe_user) {
            score36--;
            localStorage.setItem("userscore4", score36);
        }

        if (score37 > score_druhe_computer) {
            score37--;
            localStorage.setItem("computerscore4", score37);
        }

        
    })*/

    playbtn.addEventListener('click', function() {
       if (computerChoice == 'sova_sovicka_sound') {
            var audio = new Audio('audio_prave_ucho/18_sova_sovicka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'vlak_vlacik_sound') {
            var audio = new Audio('audio_prave_ucho/4_vlak_vlacik.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'nos_sound') {
            var audio = new Audio('audio_prave_ucho/45_nos.wav');
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
        game("sova_sovicka", computerChoice);
    })

    cervena_div.addEventListener('click', function() {
        game("vlak_vlacik", computerChoice);
    })

    jablko_jablcko_div.addEventListener('click', function() {
        game("nos", computerChoice);
    })

    kvet_kvietok_div.addEventListener('click', function() {
        game("kvet_kvietok", computerChoice);
    }) 
}

main();