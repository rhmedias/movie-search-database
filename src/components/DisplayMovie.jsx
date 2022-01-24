import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateMovie from "./CreateMovie";
import SearchBox from "./SearchBox";

const API_KEY = process.env.REACT_APP_API_KEY;

function DisplayMovie() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchMovie, setSearchMovie] = useState();

  

  async function fetchData(e) {
    try {
      const result = await axios.get(
        `https://www.omdbapi.com/?t=${e.target.value}&apikey=${API_KEY}`
      );
      setIsLoaded(true);
      setMovies(result.data);
      console.log(result.data);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  

    return !isLoaded ? (
      <div className="loader"></div>
    ) : (
      <div className="container-fluid">
        <div className="row">
          <div>
            <SearchBox setSearch={fetchData} search={searchMovie} />
            <h1>{searchMovie}</h1>
          </div>
          <CreateMovie
            Poster={movies.Poster}
            Title={movies.Title}
            Year={movies.Year}
            Genre={movies.Genre}
            Rating={movies.Rated}
            Actors={movies.Actors}
            Plot={movies.Plot}
          />
        </div>
      </div>
    );
}

export default DisplayMovie;
