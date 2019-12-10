// Global Variables
var words = ["velociraptor", "triceratops", "trex", "stegosaurus", "iguanodon", "pterodactyl",
    "brontosaurus", "megalodon"];

//selceted word
var gameWord = "";

//array to store the indivual letters in game word
var letters = [];

var solvedWord = [];


//Creating the function that runs when the page loads and starts the game
function game() {
    gameWord = words[Math.floor(Math.random() * words.length)];
   

    //resets every game
    solvedWord = [];

    // Splits the chosen game word into indivual letters and puts them into an array
    letters = gameWord.split("");
    console.log(letters)

    for (var i = 0; i < letters.length; i++) {
        solvedWord.push("_");
    };


//Tests
console.log(gameWord);
console.log(solvedWord);

};


function guessFunction(letter) {
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

        //runs the function that checks if the letter guess is in the chosen game word
        guessFunction(guess);
    }
};


// Runs the main function
game();
