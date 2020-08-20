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
var num3 = document.getElementById("num3").value;

var countDownTime = new Date("05:00").getTime();
var x = setInterval(function() {

    var now = new Date().getTime();
    
    var distance = countDownTime - now;
    // var days = Math.floor(distance/(1000 * 60 * 60 * 24));
    // var hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60))/ 1000);

    document.getElementById("timer").innerHTML = minutes + "m : " + seconds + "s ";

    if (distance < 0){
        clearInterval(x);
    document.getElementById("display-results").innerHTML = results;
    } 
}, 1000);
