import React, { useEffect } from "react";
import Phaser from "phaser";
import MainScene from "../phaser/MainScene"; // Adjust the path as needed

const PhaserGame = () => {
  useEffect(() => {
    const container = document.getElementById("phaser-container");
    if (!container) {
      console.error("Phaser container not found!");
      return;
    }

    // Phaser game configuration
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: "phaser-container", // Attach to this container
      scene: [MainScene],
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
          debug: false,
        },
      },
    };

    // Initialize the Phaser game
    const game = new Phaser.Game(config);
    console.log("Phaser game initialized!");

    return () => {
      console.log("Cleaning up Phaser game...");
      game.destroy(true); // Clean up Phaser game instance on unmount
    };
  }, []);

  return (
    <div
      id="phaser-container"
      style={{
        width: "800px",
        height: "600px",
        margin: "auto",
        border: "1px solid black",
      }}
    ></div>
  );
};

export default PhaserGame;
