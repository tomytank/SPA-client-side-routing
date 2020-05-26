import React from "react";
import {
  useParams,
  useRouteMatch,
  Route,
  NavLink,
  useHistory
} from "react-router-dom";

import Movies from "./Movies";

import "../styles.css";

function Avenger({ hero }) {
  const params = useParams();
  const history = useHistory();
  const { path, url } = useRouteMatch();
  // console.log("Params in Avenger.js:", params);
  // console.log("hero param is: ", hero);
  // //console.log("params.hero = ", Number(params.hero));
  // console.log(isNaN(Number(params.hero)));
  let heros = undefined;
  const isNumber = Number(params.hero);
  if (isNaN(isNumber)) {
    heros = hero.find(item => item.name === params.hero);
  } else {
    heros = hero.find(item => item.id === isNumber);
  }
  //const heros = hero.find(item => {
  //item.id === Number(params.hero);
  //console.log("item,", item);
  //});
  console.log("heros in Avenger.js is: ", heros);
  return (
    <div className="characters-list-wrapper">
      <div className="character-card">
        <h2>{heros.name}</h2>
        <p>{heros.nickname}</p>
        <p>{heros.description}</p>
        <img src={heros.thumbnail} alt="random avengers img" />
        <nav className="nav-buttons">
          <NavLink to={`${url}/movies`}>Movie List</NavLink>
        </nav>
        <Route path={`${path}/movies`}>
          <Movies movielist={heros} />
        </Route>
        <div>
          <button
            className="nav-buttons back-button"
            type="button"
            onClick={() => history.goBack()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avenger;
