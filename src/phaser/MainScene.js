import Phaser from "phaser";

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
  }
  preload() {
    //Load assets here
    this.load.image(
      "background",
      "assets/enviroment/Mossy - BackgroundDecoration.png"
    );
  }
  create() {
    //Add assets to the game
    this.add.image(400, 300, "background"); // centerd background
  }
  update() {
    // Add game logic here (e.g movment, collisions etc)
  }
}

export default Mainscene;
