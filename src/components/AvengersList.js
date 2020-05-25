import React from "react";
import { Link, useParams } from "react-router-dom";

import avengers from "../avengersData";

//console.log(avenger);

export default function AvengersList() {
  return (
    <div>
      <h1>The Avengers List!</h1>
      <p>Avengers here, avengers there....</p>
      <div className="characters-list-wrapper">
        {avengers.map(avenger => {
          console.log(avenger.id);
          return (
            <Link className="router-link" to={`/avengers/${avenger.id}`}>
              <div className="character-card" key={avenger.id}>
                <h2>{avenger.name}</h2>
                {/* <h3>({avenger.nickname})</h3> */}
                {/* <p className="character-info-wrapper">{avenger.description}</p> */}
                <img src={avenger.thumbnail} alt={avenger.name} />
              </div>
            </Link>
          );
        })}
      </div>
      {/* <Link to={`/avengers/${avenger.id}`}>
        <h3>{avenger.name}</h3>
      </Link> */}
    </div>
  );
}

// <Link to={`/avengers/${avenger.id}`}>
// <div className="character-card">
//   <h2>{avenger.name}</h2>
//   <h3>({avenger.nickname})</h3>
//   {/* <p className="character-info-wrapper">{avenger.description}</p> */}
//   <img src={avenger.thumbnail} atl={avenger.name} />
// </div>
// </Link>

// {
//   id: 1,
//   name: "Iron Man",
//   nickname: "Armored Avenger",
//   description:
//     "Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
//   thumbnail:
//     "https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_com_crd_01.jpg",
//   img:
//     "https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_com_mas_dsk_03_0.jpg",
//   movies: [
//     "Avengers: Infinity War",
//     "Spiderman: Homecoming",
//     "Captain America: Civil War",
//     "Avengers: Age of Ultron",
//     "Iron Man 3",
//     "The Avengers"
//   ]
// },
