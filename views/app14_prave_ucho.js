let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const cervene_auto_div = document.getElementById("auto_auticko");
const cervena_div = document.getElementById("sova_sovicka");
const jablko_jablcko_div = document.getElementById("strom_stromcek");
const kvet_kvietok_div = document.getElementById("vtak_vtacik");

const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");

var countClicks14 = 0;
function clickcounter() {
    countClicks14++;
    console.log(countClicks14);
    localStorage.setItem("clickcounter14", countClicks14);
}

//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_druhe_user = localStorage.getItem("userscore12");
var score_druhe_computer = localStorage.getItem("computerscore12");
console.log("User:Computer druhe kolo =>" + score_druhe_user,score_druhe_computer);

//kvoli dalsiemu inkrementovaniu score
var score26 = localStorage.getItem("userscore13");
var score27 = localStorage.getItem("computerscore13");
console.log("User:Computer tretie kolo =>" + score26,score27);
userScore_span.innerHTML = score26;
computerScore_span.innerHTML = score27;

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
    const choices =["auto_auticko_sound","sova_sovicka_sound","strom_stromcek_sound", "vtak_vtacik_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score26++;
    userScore_span.innerHTML = score26;
    computerScore_span.innerHTML = score27;
    localStorage.setItem("userscore14", score26);
    localStorage.setItem("computerscore14", score27);


}

//prehra
function lose(userChoice, computerChoice){

    score27++;
    userScore_span.innerHTML = score26;
    computerScore_span.innerHTML = score27;
    localStorage.setItem("userscore14", score26);
    localStorage.setItem("computerscore14", score27);
  

}


//logika hry
function game(userChoice, computerChoice){    
    
    //console.log("pouzivatel vybral =>" + userChoice);
    //console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
            case "auto_autickoauto_auticko_sound":
            case "sova_sovickasova_sovicka_sound":
            case "strom_stromcekstrom_stromcek_sound":
            case "vtak_vtacikvtak_vtacik_sound":
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
        
        if (score26 > score_druhe_user) {
            score26--;
            localStorage.setItem("userscore4", score26);
        }

        if (score27 > score_druhe_computer) {
            score27--;
            localStorage.setItem("computerscore4", score27);
        }

        
    })*/

    playbtn.addEventListener('click', function() {
       if (computerChoice == 'auto_auticko_sound') {
            var audio = new Audio('audio_prave_ucho/2c_auto_auticko.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'sova_sovicka_sound') {
            var audio = new Audio('audio_prave_ucho/18_sova_sovicka.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'strom_stromcek_sound') {
            var audio = new Audio('audio_prave_ucho/38_strom_stromcek.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'vtak_vtacik_sound') {
            var audio = new Audio('audio_prave_ucho/14_vtak_vtacik.wav');
            audio.play();
            playFunc(audio, 1);
       }
    })


    cervene_auto_div.addEventListener('click', function() {
        game("auto_auticko", computerChoice);
    })

    cervena_div.addEventListener('click', function() {
        game("sova_sovicka", computerChoice);
    })

    jablko_jablcko_div.addEventListener('click', function() {
        game("strom_stromcek", computerChoice);
    })

    kvet_kvietok_div.addEventListener('click', function() {
        game("vtak_vtacik", computerChoice);
    }) 
}

main();