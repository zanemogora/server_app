let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("strom_stromcek");
const babika_div = document.getElementById("vtak_vtacik");
const babika_spi_div = document.getElementById("zajac_zajacik");
const oci_div = document.getElementById("oci");

//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");

var score40 = 0;
var score41 = 0;


var countClicks21 = 0;
function clickcounter() {
    countClicks21++;
    console.log(countClicks21);
    localStorage.setItem("clickcounter21", countClicks21);

}


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
    const choices =["strom_stromcek_sound", "vtak_vtacik_sound", "zajac_zajacik_sound","oci_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score40++;
    userScore_span.innerHTML = score40;
    computerScore_span.innerHTML = score41;
    localStorage.setItem("userscore21", score40);
    localStorage.setItem("computerscore21", score41);


    
}

//prehra
function lose(userChoice, computerChoice){
    
    score41++;
    userScore_span.innerHTML = score40;
    computerScore_span.innerHTML = score41;
    localStorage.setItem("userscore21", score40);
    localStorage.setItem("computerscore21", score41);

    

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "strom_stromcekstrom_stromcek_sound":
            case "vtak_vtacikvtak_vtacik_sound":
            case "zajac_zajacikzajac_zajacik_sound":
            case "ocioci_sound":    
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
            var audio = new Audio('audio_prave_ucho/38_strom_stromcek.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'vtak_vtacik_sound') {
            var audio = new Audio('audio_prave_ucho/14_vtak_vtacik.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'zajac_zajacik_sound') {
            var audio = new Audio('audio_prave_ucho/15_zajac_zajacik.wav');
            audio.play();
            playFunc(audio, 1);
       }

       if (computerChoice == 'oci_sound') {
        var audio = new Audio('audio_prave_ucho/41_oci.wav');
        audio.play();
        playFunc(audio, 1);
   }

    })


    babika_place_div.addEventListener('click', function() {
        game("strom_stromcek", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("vtak_vtacik", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("zajac_zajacik", computerChoice);
    })

    oci_div.addEventListener('click', function() {
        game("oci", computerChoice);
    })
 
}

main();