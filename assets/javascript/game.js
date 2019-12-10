// Global Variables
var words = ["velociraptor", "triceratops", "trex", "stegosaurus", "iguanodon", "pterodactyl",
    "brontosaurus", "megalodon"];

//selceted word
var gameWord = "";

//array to store the indivual letters in game word
var letters = [];



//Creating the function that runs when the page loads and starts the game
function game() {
    gameWord = words[Math.floor(Math.random() * words.length)];
    console.log(gameWord);
    // Splits the chosen game word into indivual letters and puts them into an array
    letters = gameWord.split("");
    console.log(letters)
};


function guessFunction (letter) {
    //This initally states that the letter is not in the chosen game words  
    var letterStatus = false;

    for (var i = 0; i < letters.length; i++) {
        if (gameWord[i] === letter) {
            // If the letter exists then toggle this boolean to true. This will be used in the next step.
            letterStatus = true;
            console.log("The letter " + letter + " is in the word")
        }
    }

}
//collects key clicks

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var guess = event.key.toLowerCase();
        //Checks for what is guesses
        console.log(guess);
       guessFunction(guess);
    }
};


// Runs the main function
game();
