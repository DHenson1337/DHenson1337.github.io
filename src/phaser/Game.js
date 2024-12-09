import Phaser from "phaser";
import MainScene from "./MainScene"; // Imports the game from Main Scene
import { debug } from "webpack";

//Phaser configuration
const config = {
  type: Phaser.AUTO, //Automatically use WebGL or Canvas
  width: 800, //Width of the game
  height: 600, // Height of the game
  parent: "phaser-container", // ID of the div to render the game in
  physics: {
    default: "arcade", // Use arcade physics
    arcade: {
      gravity: { y: 300 }, //Set vertical gravity (adjust as needed)
      debug: false, // Disable debug visuals
    },
  },
  scene: [MainScene], // Load the MainScene
};

//Create the game instance
const game = new Phaser.Game(config);

export default game;
