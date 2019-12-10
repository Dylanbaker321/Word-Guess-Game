// Global Variables
var words = ["velociraptor", "triceratops", "trex", "stegosaurus", "iguanodon", "pterodactyl",
  "brontosaurus", "megalodon"];

  //selceted word

  var gameWord = "";

  function game() {
    gameWord = words[Math.floor(Math.random() * words.length)];
    console.log(gameWord);
  };

  game();
