$(document).ready(function() {
    // make our variables global 
    var number, purpleJewel, blueJewel, yellowJewel, greenJewel;
    var userScore = 0;
    var numberWins = 0;
    var numberLosses = 0;



   
    
    function initializeGame() {

        number = "";
        purpleJewel = "";
        blueJewel = "";
        yellowJewel = "";
        greenJewel = "";
        userScore = 0;

        console.log('initialize function called')


        $('#purpleJewel, #blueJewel, #yellowJewel, #greenJewel').empty();
        $('#userScoreDiv').html("Your total score is: " + userScore);
        $('#computerNumberDiv').html("Computer Number: " + chosenNumber());
    }



    //Generate a number between 19 - 120
    function chosenNumber() {
        var number = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
            42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
            100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120
        ];

        var randomNumber = number[Math.floor(Math.random() * number.length)];

        console.log(randomNumber);
        return randomNumber;
    }

    var selectedNumber = chosenNumber();

    $("#computerNumberDiv").html("Computer Number: " + selectedNumber);


    //generate number between 1 and 12 for purple jewel
    function chosenNumberPurple() {
        var purpleJewel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        var randomNumberPurple = purpleJewel[Math.floor(Math.random() * purpleJewel.length)];

        console.log(randomNumberPurple);
        return randomNumberPurple;
    }
    var selectedNumberPurple = chosenNumberPurple();


   
    //generate number between 1 and 12 for blue jewel
    function chosenNumberBlue() {
        var blueJewel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        var randomNumberBlue = blueJewel[Math.floor(Math.random() * blueJewel.length)];

        console.log(randomNumberBlue);
        return randomNumberBlue;
    }
    var selectedNumberBlue = chosenNumberBlue();


    //generate number between 1 and 12 for yellow jewel
    function chosenNumberYellow() {
        var yellowJewel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        var randomNumberYellow = yellowJewel[Math.floor(Math.random() * yellowJewel.length)];

        console.log(randomNumberYellow);
        return randomNumberYellow;
    }
    var selectedNumberYellow = chosenNumberYellow();


    //generate number between 1 and 12 for green jewel
    function chosenNumberGreen() {
        var greenJewel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        var randomNumberGreen = greenJewel[Math.floor(Math.random() * greenJewel.length)];

        console.log(randomNumberGreen);
        return randomNumberGreen;
    }
    var selectedNumberGreen = chosenNumberGreen();


    //capture click of each jewel button
    $('.purpleJewel').on('click', function(event) {
        userScore += selectedNumberPurple;
        $('#userScoreDiv').html("Your total score is: " + userScore);
        winner();
        loser();
    });


    
    $('.blueJewel').on('click', function(event) {
        userScore += selectedNumberBlue;
        $('#userScoreDiv').html("Your total score is: " + userScore);
        winner();
        loser();
    });


    
    $('.yellowJewel').on('click', function(event) {
        userScore += selectedNumberYellow;
        $('#userScoreDiv').html("Your total score is: " + userScore);
        winner();
        loser();
    });


    
    $('.greenJewel').on('click', function(event) {
        userScore += selectedNumberGreen;
        $('#userScoreDiv').html("Your total score is: " + userScore);
        winner();
        loser();

    });


    
    function winner() {
        console.log(userScore)
        console.log(selectedNumber)
        if (userScore === selectedNumber) {
            console.log('winner')
            alert('Winner!');
            numberWins++;
            initializeGame();

        }
        $('#wins').html('Wins: ' + numberWins);

    }


    function loser() {
        console.log(userScore)
        console.log(selectedNumber)
        if (userScore > selectedNumber) {
            console.log('loser')
            alert('Loser!');
            numberLosses++;
            initializeGame();

        }
        $('#losses').html('Losses: ' + numberLosses);
    }


});