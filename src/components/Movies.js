import React from "react";

function Movies(props) {
  console.log(props);
  return (
    <div>
      <p className="item-description">{props.movielist.movies}</p>
    </div>
  );
}

export default Movies;
