const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");

var score9 = localStorage.getItem("userscore5");
var score10 = localStorage.getItem("computerscore5");
userScore_span.innerHTML = score9;
computerScore_span.innerHTML = score10;





const userScore_span2 = document.getElementById("correct-score2");
const computerScore_span2 = document.getElementById("wrong-score2");

var score19 = localStorage.getItem("userscore10");
var score20 = localStorage.getItem("computerscore10");
userScore_span2.innerHTML = score19;
computerScore_span2.innerHTML = score20;





const userScore_span3 = document.getElementById("correct-score3");
const computerScore_span3 = document.getElementById("wrong-score3");

var score28 = localStorage.getItem("userscore15");
var score29 = localStorage.getItem("computerscore15");
userScore_span3.innerHTML = score28;
computerScore_span3.innerHTML = score29;





const userScore_span4 = document.getElementById("correct-score4");
const computerScore_span4 = document.getElementById("wrong-score4");

var score38 = localStorage.getItem("userscore20");
var score39 = localStorage.getItem("computerscore20");
userScore_span4.innerHTML = score38;
computerScore_span4.innerHTML = score39;





const userScore_span5 = document.getElementById("correct-score5");
const computerScore_span5 = document.getElementById("wrong-score5");

var score48 = localStorage.getItem("userscore25");
var score49 = localStorage.getItem("computerscore25");
userScore_span5.innerHTML = score48;
computerScore_span5.innerHTML = score49;





const userScore_span6 = document.getElementById("correct-score6");
const computerScore_span6 = document.getElementById("wrong-score6");

var score58 = parseInt(score9) + parseInt(score19) + parseInt(score28) + parseInt(score38) + parseInt(score48);
var score59 = parseInt(score10) + parseInt(score20) + parseInt(score29) + parseInt(score39) + parseInt(score49);
userScore_span6.innerHTML = score58;
computerScore_span6.innerHTML = score59;




function myFunction(){

var number2 = 25;
var percentage = Math.floor((parseInt(score58) / number2) * 100);


    if (percentage >= 80) {
        document.getElementById("demo1").innerHTML = "Dosiahli ste " + percentage + "%" + " správnych odpovedí.";
        document.getElementById("demo2").innerHTML = "Máte výborný sluch (>80%). ಠ‿↼";

    }else if (percentage < 80 && percentage >= 50){
        document.getElementById("demo1").innerHTML = "Dosiahli ste " + percentage + "%" + " správnych odpovedí.";
        document.getElementById("demo2").innerHTML = "Váš sluch je v poriadku (50-80%). ʘ‿ʘ";

    }else {
        document.getElementById("demo1").innerHTML = "Dosiahli ste " + percentage + "%" + " správnych odpovedí.";
        document.getElementById("demo2").innerHTML = "Váš sluch nie je v dobrej kondícii (<50%). ಠ~ಠ";
    }

}


var countClicksSummary1kolo = localStorage.getItem("clickcountersummary1kolo");
document.getElementById("demo3").innerHTML = "Počet pokusov: " + countClicksSummary1kolo + " x."  ;

var countClicksSummary2kolo = localStorage.getItem("clickcountersummary2kolo");
document.getElementById("demo4").innerHTML = "Počet pokusov: " + countClicksSummary2kolo + " x."  ;

var countClicksSummary3kolo = localStorage.getItem("clickcountersummary3kolo");
document.getElementById("demo5").innerHTML = "Počet pokusov: " + countClicksSummary3kolo + " x."  ;

var countClicksSummary4kolo = localStorage.getItem("clickcountersummary4kolo");
document.getElementById("demo6").innerHTML = "Počet pokusov: " + countClicksSummary4kolo + " x."  ;

var countClicksSummary5kolo = localStorage.getItem("clickcountersummary5kolo");
document.getElementById("demo7").innerHTML = "Počet pokusov: " + countClicksSummary5kolo + " x."  ;


var countClicksSummary = parseInt(countClicksSummary1kolo|| 0) + parseInt(countClicksSummary2kolo|| 0) + parseInt(countClicksSummary3kolo|| 0) + parseInt(countClicksSummary4kolo|| 0) + parseInt(countClicksSummary5kolo|| 0);
document.getElementById("demo8").innerHTML = "Počet pokusov celkovo: " + countClicksSummary + " x."  ;







function confirmation() {
    var user_choice = window.confirm('Naozaj si prajete ukončiť hru a presunúť sa do úvodu aplikácie ?');
    if(user_choice==true) {
        window.location='index.html';  // you can also use element.submit() if your input type='submit' 
    } else {
        return false;
    }
}


/*function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + 
  
  encodeURIComponent(text));
    pom.setAttribute('download', filename);
  
    pom.style.display = 'none';
    document.body.appendChild(pom);
  
    pom.click();
  
    document.body.removeChild(pom);
}*/







function main(){
    myFunction();
}


main();