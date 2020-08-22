var myVar = setInterval(myTimer, 1000);
function myTimer(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("time-bar").innerHTML = t;
}

var guess1 = Math.floor(Math.random() * 90) + 1;
var guess2 = Math.floor(Math.random() * 90) + 1;
var guess3 = Math.floor(Math.random() * 90) + 1;
var correctGuesses;
var results;
if (guess1 == guess2){
    guess2 = guess1 + Math.floor(Math.random() * 20);
    if(guess2 > 90){
        guess2 = guess2 - 20;
    }
}
if (guess2 == guess3){
    guess3 = guess2 + Math.floor(Math.random() * 20);
    if(guess2 > 90){
        guess2 = guess2 - 50;
    }
}

var results = guess1 + "-" + guess2 + "-" + guess3;

var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var num3 = document.getElementById("num3").value



