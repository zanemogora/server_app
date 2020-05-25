let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const cervene_auto_div = document.getElementById("ucho");
const cervena_div = document.getElementById("vtak_vtacik");
const jablko_jablcko_div = document.getElementById("zajac_zajacik");
const kvet_kvietok_div = document.getElementById("ruka");

const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");

var countClicks13 = 0;
function clickcounter() {
    countClicks13++;
    console.log(countClicks13);
    localStorage.setItem("clickcounter13", countClicks13);

}


//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_prve_user = localStorage.getItem("userscore11");
var score_prve_computer = localStorage.getItem("computerscore11");
console.log("User:Computer prve kolo =>" + score_prve_user,score_prve_computer);

//kvoli dalsiemu inkrementovaniu score
var score24 = localStorage.getItem("userscore12");
var score25 = localStorage.getItem("computerscore12");
console.log("User:Computer druhe kolo =>" + score24,score25);
userScore_span.innerHTML = score24;
computerScore_span.innerHTML = score25;

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
    const choices =["ucho_sound","vtak_vtacik_sound","zajac_zajacik_sound", "ruka_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score24++;
    userScore_span.innerHTML = score24;
    computerScore_span.innerHTML = score25;
    localStorage.setItem("userscore13", score24);
    localStorage.setItem("computerscore13", score25);


}

//prehra
function lose(userChoice, computerChoice){

    score25++;
    userScore_span.innerHTML = score24;
    computerScore_span.innerHTML = score25;
    localStorage.setItem("userscore13", score24);
    localStorage.setItem("computerscore13", score25);
  

}


//logika hry
function game(userChoice, computerChoice){    
    
    //console.log("pouzivatel vybral =>" + userChoice);
    //console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
            case "uchoucho_sound":
            case "vtak_vtacikvtak_vtacik_sound":
            case "zajac_zajacikzajac_zajacik_sound":
            case "rukaruka_sound":
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
        
        if (score24 > score_prve_user) {
            score24--;
            localStorage.setItem("userscore", score24);
        }

        if (score25 > score_prve_computer) {
            score25--;
            localStorage.setItem("computerscore", score25);
        }

        
    })*/

    playbtn.addEventListener('click', function() {
       if (computerChoice == 'ucho_sound') {
            var audio = new Audio('audio/44_ucho.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'vtak_vtacik_sound') {
            var audio = new Audio('audio/14_vtak_vtacik.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'zajac_zajacik_sound') {
            var audio = new Audio('audio/15_zajac_zajacik.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'ruka_sound') {
            var audio = new Audio('audio/42a_ruka.wav');
            audio.play();
            playFunc(audio, 1);
       }
    })


    cervene_auto_div.addEventListener('click', function() {
        game("ucho", computerChoice);
    })

    cervena_div.addEventListener('click', function() {
        game("vtak_vtacik", computerChoice);
    })

    jablko_jablcko_div.addEventListener('click', function() {
        game("zajac_zajacik", computerChoice);
    })

    kvet_kvietok_div.addEventListener('click', function() {
        game("ruka", computerChoice);
    }) 
}

main();