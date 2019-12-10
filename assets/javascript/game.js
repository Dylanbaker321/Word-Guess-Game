// Global Variables
var words = ["velociraptor", "triceratops", "trex", "stegosaurus", "iguanodon", "pterodactyl",
  "brontosaurus", "megalodon"];

  //selceted word
  var gameWord = "";
//Creating the function that runs when the page loads and starts the game
  function game() {
    gameWord = words[Math.floor(Math.random() * words.length)];
    console.log(gameWord);
  };

  //collects key clicksS
  document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) { 
      var guess = event.key.toLowerCase();
   
      
      //Checks for what is guesses
      console.log(guess);
   
    }
  };


  // Runs the main functio
  game();
