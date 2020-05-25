
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const modre_auto_div = document.getElementById("modre_auto");
const bicykel_div = document.getElementById("bicykel");
const lietadlo_lietadielko_div = document.getElementById("lietadlo_lietadielko");
const autobus_div = document.getElementById("autobus");
//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");

var countClicks4 = 0;
function clickcounter() {
    countClicks4++;
    console.log(countClicks4);
    localStorage.setItem("clickcounter4", countClicks4);

}

//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_druhe_user = localStorage.getItem("userscore2");
var score_druhe_computer = localStorage.getItem("computerscore2");
console.log("User:Computer druhe kolo =>" + score_druhe_user,score_druhe_computer);

//kvoli dalsiemu inkrementovaniu score
var score7 = localStorage.getItem("userscore3");
var score8 = localStorage.getItem("computerscore3");
console.log("User:Computer tretie kolo =>" + score7,score8);
userScore_span.innerHTML = score7;
computerScore_span.innerHTML = score8;

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
    const choices =["modre_auto_sound","bicykel_sound","lietadlo_lietadielko_sound", "autobus_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score7++;
    userScore_span.innerHTML = score7;
    computerScore_span.innerHTML = score8;
    localStorage.setItem("userscore4", score7);
    localStorage.setItem("computerscore4", score8);


    
}

//prehra
function lose(userChoice, computerChoice){
    
    score8++;
    userScore_span.innerHTML = score7;
    computerScore_span.innerHTML = score8;
    localStorage.setItem("userscore4", score7);
    localStorage.setItem("computerscore4", score8);
    

    
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "modre_automodre_auto_sound":
            case "bicykelbicykel_sound":
            case "lietadlo_lietadielkolietadlo_lietadielko_sound":
            case "autobusautobus_sound":
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
       if (computerChoice == 'modre_auto_sound') {
            var audio = new Audio('audio_prave_ucho/26_modre auto.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'bicykel_sound') {
            var audio = new Audio('audio_prave_ucho/1_bicykel.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'lietadlo_lietadielko_sound') {
            var audio = new Audio('audio_prave_ucho/3_lietadlo_lietadielko.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'autobus_sound') {
            var audio = new Audio('audio_prave_ucho/5_autobus.wav');
            audio.play();
            playFunc(audio, 1);
       }
    })


    modre_auto_div.addEventListener('click', function() {
        game("modre_auto", computerChoice);
        document.getElementById("modre_auto").disabled = true;

    })

    bicykel_div.addEventListener('click', function() {
        game("bicykel", computerChoice);
        document.getElementById("bicykel").disabled = true;

    })

    lietadlo_lietadielko_div.addEventListener('click', function() {
        game("lietadlo_lietadielko", computerChoice);
        document.getElementById("lietadlo_lietadielko").disabled = true;

    })

    autobus_div.addEventListener('click', function() {
        game("autobus", computerChoice);
        document.getElementById("autobus").disabled = true;

    })

    
}

main();