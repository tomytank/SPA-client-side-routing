import React from "react";
import { useParams } from "react-router-dom";

function Avenger({ hero }) {
  const params = useParams();
  //console.log("Params in Avenger.js:", params);
  //console.log("hero param is: ", hero);
  //console.log("params.hero = ", Number(params.hero));
  //console.log("params.hero is: ", Number(params.hero);
  const heros = hero.find(item => item.id === Number(params.hero));
  //const heros = hero.find(item => {
  //item.id === Number(params.hero);
  //console.log("item,", item);
  //});
  //console.log("heros in Avenger.js is: ", heros);
  return (
    <div className="character-card">
      <h2>{heros.nickname}</h2>
      <p>{heros.nickname}</p>
      <p>{heros.description}</p>
      <img src={heros.thumbnail} alt="random avengers img" />
    </div>
  );
}

export default Avenger;
