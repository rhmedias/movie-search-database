import React from "react";

function CreateMovie({ Title, Year, Genre, Rated, Actors, Plot, Poster }) {
  return (
    <div className="movie">
      <div className="movie_poster">
        <img src={Poster} alt="movie_poster" />
      </div>
      <div className="descriptions">
        <p>{Title}</p>
        <p>{Year}</p>
        <p>{Genre}</p>
        <p>{Rated}</p>
        <p>{Actors}</p>
        <p>{Plot}</p>
      </div>
    </div>
  );
}

export default CreateMovie;
