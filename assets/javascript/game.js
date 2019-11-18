alert (`Hi Anna, Anthony, & Justin`)


$(document).ready(function() {
   

// Print-out a for-loop for computer's random numnbers to be between 19-120....
// Computer's random numbers should automatically identify its value at start of game...

var generatedPick = 
    Math.floor((Math.random() * 120) + 19); { 
        while (generatedPick > 120);
            Math.floor((Math.random() * 120) + 19);  
        console.log("generatedPick: " + generatedPick);
    }
    $(`.randomNum`).html(generatedPick);


// Set all 4 crystals random value to be between 1-12....
// Make a variable for 4 Crystals...
var num1 = Math.floor(Math.random()*12+1)
var num2 = Math.floor(Math.random()*12+1)
var num3 = Math.floor(Math.random()*12+1)
var num4 = Math.floor(Math.random()*12+1)


$(`#first`).bind(`click`, function (evt) {
var num1 = Math.floor((Math.random() * 12) + 1); 
    console.log("Num 1: " + num1);
});

$(`#second`).bind(`click`, function (evt) {
    var num2 = Math.floor((Math.random() * 12) + 1); 
        console.log("Num 2: " + num2);
});
    
$(`#third`).bind(`click`, function (evt) {
    var num3 = Math.floor((Math.random() * 12) + 1); 
        console.log("Num 3: " + num3);
});

$(`#forth`).bind(`click`, function (evt) {
    var num4 = Math.floor((Math.random() * 12) + 1); 
});


// Create a wins var...
// Create a losses var...
var yourPoints = 0;
var wins = 0;
var losses = 0;

$(`#numberWins`).text(wins);
$(`#numberLosses`).text(losses);

//------------------ RESET-------------
// Print-out a for-loop for computer's random numnbers to be between 19-120....
// Set all 4 crystal function to randomly inherit unique point vlue at start of game....
function reset() {
    generatedPick = 
    Math.floor((Math.random() * 120) + 19); { 
        while (generatedPick > 120);
            Math.floor((Math.random() * 120) + 19);  
        console.log("generatedPick: " + generatedPick);
    }
    $(`.randomNum`).html(generatedPick);

    num1 = Math.floor(Math.random()*12+1);
    num2 = Math.floor(Math.random()*12+1);
    num3 = Math.floor(Math.random()*12+1);
    num4 = Math.floor(Math.random()*12+1);
    yourPoints = 0;
    $(`#finalPoints`).text(yourPoints);
}

function blingBling() {
    alert("YOU WON!!!");
    wins++;
    $(`#numberWins`).text(wins);
    reset();
}

function noBling(losses) {
    alert("You LOST!!!");
    losses++;
    $(`#numberLoses`).text(losses);
    reset();
}
$(`#first`).bind(`click`, function () {
    yourPoints = yourPoints + num1;
    console.log("New yourPoints= " + yourPoints);
    $(`#finalPoints`).text(yourPoints);
     if(yourPoints === generatedPick) {
        wins();
     }
     else if (yourPoints > generatedPick) {
        noBling();
     }
});

$(`#second`).bind(`click`, function () {
    yourPoints = yourPoints + num2;
    console.log("New yourPoints= " + yourPoints);
    $(`#finalPoints`).text(yourPoints);
     if(yourPoints === generatedPick) {
         wins();
     }
     else if (yourPoints > generatedPick) {
         noBling();
     }
});

$(`#third`).bind(`click`, function () {
    yourPoints = yourPoints + num3;
    console.log("New yourPoints= " + yourPoints);
    $(`#finalPoints`).text(yourPoints);
     if(yourPoints === generatedPick) {
        wins();
     }
     else if (yourPoints > generatedPick) {
         noBling();
     }
});

$(`#forth`).bind(`click`, function () {
    yourPoints = yourPoints + num4;
    console.log("New yourPoints= " + yourPoints);
    $(`#finalPoints`).text(yourPoints);

     if(yourPoints === generatedPick) {
        wins();
     }
     else if (yourPoints > generatedPick) {
         noBling();
     }
});


// Create a "Your Score Is" variable and function for-loop...


});