import Phaser from "phaser";

let updateCounter = 0;
let sceneCounter = 0; // Global counter to track MainScene instances

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
    sceneCounter += 1; // Increment the counter every time MainScene is created
    console.log(`MainScene instances created: ${sceneCounter}`);
  }

  preload() {
    console.log("Preloading assets...");
    this.load.image(
      "background",
      "assets/environment/MossyTileset/BackgroundDecoration.png"
    );
    this.load.image(
      "floatingPlatforms",
      "assets/environment/MossyTileset/FloatingPlatforms.png"
    );
    this.load.image(
      "hangingPlants",
      "assets/environment/MossyTileset/HangingPlants.png"
    );
    this.load.image(
      "mossyHills",
      "assets/environment/MossyTileset/MossyHills.png"
    );
    console.log("Assets preloaded!");
  }

  create() {
    console.log("Creating scene...");
    const bg = this.add.image(0, 0, "background").setOrigin(0, 0);
    bg.setDisplaySize(this.sys.canvas.width, this.sys.canvas.height); // Stretch to fit
    console.log(`Scaled background image: ${bg.width}x${bg.height}`);
  }

  update(time, delta) {
    updateCounter += 1;
    /* if (updateCounter % 100 === 0) {
      console.log(`Update called ${updateCounter} times`);
    } */
  }

  shutdown() {
    console.log("MainScene: Shutdown called");
    // Cleanup logic here
  }

  destroy() {
    console.log("MainScene: Destroy called");
    // Final cleanup here
  }
}

export default MainScene;
