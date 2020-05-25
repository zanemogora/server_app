const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const vlak_vlacik_div = document.getElementById("vlak_vlacik");
const vtak_vtacik_div = document.getElementById("vtak_vtacik");
//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");

var countClicks3 = 0;
function clickcounter() {
    countClicks3++;
    console.log(countClicks3);
    localStorage.setItem("clickcounter3", countClicks3);

}



//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_prve_user = localStorage.getItem("userscore");
var score_prve_computer = localStorage.getItem("computerscore");
console.log("User:Computer prve kolo =>" + score_prve_user,score_prve_computer);

//kvoli dalsiemu inkrementovaniu score
var score5 = localStorage.getItem("userscore2");
var score6 = localStorage.getItem("computerscore2");
console.log("User:Computer druhe kolo =>" + score5,score6);
userScore_span.innerHTML = score5;
computerScore_span.innerHTML = score6;

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
    const choices =["vlak_vlacik_sound","vtak_vtacik_sound"];
    const randomNumber = Math.floor(Math.random() * 2);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score5++;
    userScore_span.innerHTML = score5;
    computerScore_span.innerHTML = score6;
    localStorage.setItem("userscore3", score5);
    localStorage.setItem("computerscore3", score6);

    //window.location.replace('vyhra3.html');


}

//prehra
function lose(userChoice, computerChoice){
    
    score6++;
    userScore_span.innerHTML = score5;
    computerScore_span.innerHTML = score6;
    localStorage.setItem("userscore3", score5);
    localStorage.setItem("computerscore3", score6);
    
    //window.location.replace('prehra3.html');

    
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "vlak_vlacikvlak_vlacik_sound":
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
        
        if (score5 > score_prve_user) {
            score5--;
            localStorage.setItem("userscore", score5);
        }

        if (score6 > score_prve_computer) {
            score6--;
            localStorage.setItem("computerscore", score6);
        }

        
    })*/

    play_btn.addEventListener('click', function() {
       if (computerChoice == 'vlak_vlacik_sound') {
            var audio = new Audio('audio/4_vlak_vlacik.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'vtak_vtacik_sound') {
            var audio = new Audio('audio/14_vtak_vtacik.wav');
            audio.play();
            playFunc(audio, 1);
       }
    })


    vlak_vlacik_div.addEventListener('click', function() {
        game("vlak_vlacik", computerChoice);
        document.getElementById("vlak_vlacik").disabled = true;

    })

    vtak_vtacik_div.addEventListener('click', function() {
        game("vtak_vtacik", computerChoice);
        document.getElementById("vtak_vtacik").disabled = true;

    })

}

main();