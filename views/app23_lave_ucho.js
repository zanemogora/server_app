let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const cervene_auto_div = document.getElementById("auto_auticko");
const cervena_div = document.getElementById("nos");
const jablko_jablcko_div = document.getElementById("kvet_kvietok");
const noha_div = document.getElementById("noha");


const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");

var countClicks23 = 0;
function clickcounter() {
    countClicks23++;
    console.log(countClicks23);
    localStorage.setItem("clickcounter23", countClicks23);

}
//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_prve_user = localStorage.getItem("userscore21");
var score_prve_computer = localStorage.getItem("computerscore21");
console.log("User:Computer prve kolo =>" + score_prve_user,score_prve_computer);

//kvoli dalsiemu inkrementovaniu score
var score43 = localStorage.getItem("userscore22");
var score44 = localStorage.getItem("computerscore22");
console.log("User:Computer druhe kolo =>" + score43,score44);
userScore_span.innerHTML = score43;
computerScore_span.innerHTML = score44;


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
    const choices =["auto_auticko_sound","nos_sound","kvet_kvietok_sound", "noha_sound" ];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score43++;
    userScore_span.innerHTML = score43;
    computerScore_span.innerHTML = score44;
    localStorage.setItem("userscore23", score43);
    localStorage.setItem("computerscore23", score44);


}

//prehra
function lose(userChoice, computerChoice){

    score44++;
    userScore_span.innerHTML = score43;
    computerScore_span.innerHTML = score44;
    localStorage.setItem("userscore23", score43);
    localStorage.setItem("computerscore23", score44);
  

}


//logika hry
function game(userChoice, computerChoice){    
    
    //console.log("pouzivatel vybral =>" + userChoice);
    //console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
            case "auto_autickoauto_auticko_sound":
            case "nosnos_sound":
            case "kvet_kvietokkvet_kvietok_sound":
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
    

   /* back_btn.addEventListener('click', function() {
        console.log("STLACIL SI BACK");
        
        if (score43 > score_prve_user) {
            score43--;
            localStorage.setItem("userscore", score43);
        }

        if (score44 > score_prve_computer) {
            score44--;
            localStorage.setItem("computerscore", score44);
        }

        
    })*/

    playbtn.addEventListener('click', function() {
       if (computerChoice == 'auto_auticko_sound') {
            var audio = new Audio('audio_lave_ucho/2a_auto_auticko.wav');
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

       if (computerChoice == 'noha_sound') {
        var audio = new Audio('audio_lave_ucho/43_noha.wav');
        audio.play();
        playFunc(audio, 1);
   }


    })


    cervene_auto_div.addEventListener('click', function() {
        game("auto_auticko", computerChoice);
    })

    cervena_div.addEventListener('click', function() {
        game("nos", computerChoice);
    })

    jablko_jablcko_div.addEventListener('click', function() {
        game("kvet_kvietok", computerChoice);
    })
    noha_div.addEventListener('click', function() {
        game("noha", computerChoice);
    })
}

main();