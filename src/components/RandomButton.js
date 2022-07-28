import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({ addPlaneteer }) {
  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();
    addPlaneteer(randomPlaneteer)
    // console.log("For the advanced deliverables", randomPlaneteer);
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Show a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
