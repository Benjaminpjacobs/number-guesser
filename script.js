var clearButton = document.querySelector('#buttonClear');
var guessButton = document.querySelector('#buttonGuess');
var guess = document.querySelector('#guess');
var message = document.querySelector('#guessMessage');
var guessDisplay = document.querySelector('#displayGuess');
var resetButton = document.querySelector('#reset');
var min = document.querySelector('#min')
var max = document.querySelector('#max')
var rangeSet = document.querySelector('#setRange')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var number = getRandomInt(1, 100)

function tooHigh(theGuess) {
    guessDisplay.innerText = theGuess
    message.innerHTML = "That is too High"
};

function tooLow(theGuess) {
    guessDisplay.innerText = theGuess
    message.innerHTML = "That is too Low"
};

function justRight(theGuess) {
    guessDisplay.innerText = theGuess
    message.innerHTML = "Boom Goes The Dynamite!"
};

function buttonsInactive() {
    guessButton.classList.remove("btn-active");
    clearButton.classList.remove("btn-active");
};

function buttonsActive() {
    guessButton.classList.add("btn-active");
    clearButton.classList.add("btn-active");
};

function clearGuess() {
    guess.value = "";
};

clearButton.addEventListener('click', function() {
    buttonsInactive();
    clearGuess();
});

guessButton.addEventListener('click', function() {
    resetButton.classList.add("btn-active");
    var theGuess = parseInt(guess.value)

    if (guess.value == '') {
        alert("You have to guess!")
    } else if (theGuess < 0 || theGuess > 100) {
        alert("The number is between 0 and 100!")
    } else if (isNaN(theGuess)) {
        alert("You must guess a number!")
    } else if (theGuess === number) {
        justRight(theGuess)
    } else if (theGuess > number) {
        tooHigh(theGuess)
    } else {
        tooLow(theGuess)
    }
})

resetButton.addEventListener('click', function() {
    buttonsInactive();
    clearGuess();
    resetButton.classList.remove('btn-active')
    guessDisplay.innerText = "--"
    message.innerHTML = ""
    number = Math.floor(Math.random(1, 100) * 100);
})

guess.addEventListener('keyup', function() {
    if (guess.value === "") {
        buttonsInactive()
    } else {
        buttonsActive()
    };
})

min.addEventListener('keyup', function() {
    rangeSet.classList.add('btn-active');
})

function clearRange() {
    min.value = "";
    max.value = "";
}

rangeSet.addEventListener('click', function() {
    minimum = parseInt(min.value)
    maximum = parseInt(max.value)
    number = getRandomInt(minimum, maximum)
    clearRange();
    rangeSet.classList.remove('btn-active');
})