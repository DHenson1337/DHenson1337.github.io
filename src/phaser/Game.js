import Phaser from "phaser";
import MainScene from "./MainScene"; // Imports the game from Main Scene
// import { debug } from "webpack";

//Phaser configuration
let game;

if (!game) {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "phaser-container", // Ensure it matches the id
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    },
    scene: [MainScene],
  };

  game = new Phaser.Game(config);
  console.log("Phaser game initialized:", game);

  // Debug: Check if the parent matches
  console.log("Canvas parent:", document.querySelector("#phaser-container"));
}

export default game;
