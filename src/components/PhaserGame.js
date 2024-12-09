import React, { useEffect } from "react";
import game from "../phaser/Game"; //Import the Phaser Game instance

//Define the PhaserGame component
const PhaserGame = () => {
  useEffect(() => {
    //This effect runs when the component is mounted to the DOM
    return () => {
      // Cleanup: Destroy the Phaser game instance when the component unmounts
      game.destory(true);
    };
  }, []);

  return (
    //Create a container for the Phaser game
    <div>
      id="phaser-container" style=
      {{
        width: "800px",
        height: "600px",
        margin: "auto",
        border: "1px solid black",
      }}
    </div>
  );
};

export default PhaserGame;
