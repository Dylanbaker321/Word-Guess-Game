// Global Variables
var words = ["velociraptor", "triceratops", "trex", "stegosaurus", "iguanodon", "pterodactyl",
    "brontosaurus", "megalodon"];

//selceted word
var gameWord = "";

//array to store the indivual letters in game word
var letters = [];

var solvedWord = [];
var wrongGuesses = [];
var guessesLeft = 9;

//Creating the function that runs when the page loads and starts the game
function game() {
    gameWord = words[Math.floor(Math.random() * words.length)];


    //resets every game
    solvedWord = [];
    guessesLeft = 9;
    // Splits the chosen game word into indivual letters and puts them into an array
    letters = gameWord.split("");


    // Makes the solved array the corect length for the chosen word
    for (var i = 0; i < letters.length; i++) {
        solvedWord.push("_");
    };


    //Tests
    console.log(gameWord);
    console.log(solvedWord);
    console.log(letters)

};


function guessFunction(letter) {
    //This initally states that the letter is not in the chosen game words  
    var letterStatus = false;
    var guessedBefore = false;

    //checks if you have alreay tried a letter
    for (var i = 0; i < wrongGuesses.length; i++) {
        if (wrongGuesses[i] === letter) {
            guessedBefore = true;
            console.log("You have already guessed this letter")

        }

    }
if (guessedBefore){
    guessesLeft++;
    guessedBefore = false;
}

    for (var i = 0; i < letters.length; i++) {
        if (gameWord[i] === letter) {
            // If the letter exists then toggle this boolean to true. This will be used in the next step.
            letterStatus = true;
            console.log("The letter " + letter + " is in the word")
        }
        // this section will only run if the guessed letter is in the word and will push the letter to the correct parts of the solvedWold array
    };
    if (letterStatus == true) {

        for (var i = 0; i < letters.length; i++) {
            //pushs letter to correct spot in solved word
            if (gameWord[i] === letter) {
                solvedWord[i] = letter
            }
        }
    } else {
        guessesLeft--;
        wrongGuesses.push(letter);
    }


    //tests
    console.log(solvedWord);
    console.log(guessesLeft)
    console.log(wrongGuesses);


}
//collects key clicks

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var guess = event.key.toLowerCase();
        //Checks for what is guesses
        console.log(guess);

        //runs the function that checks if the letter guess is in the chosen game word
        guessFunction(guess);
    }
};


// Runs the main function
game();
