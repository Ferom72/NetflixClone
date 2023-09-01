import React, { useState, useEffect } from "react";
import instance from "../axios";
import "../MyStyles/rows.css";

function Rows({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            key={index}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={
              base_url +
              `${isLargeRow ? movie.poster_path : movie.backdrop_path}`
            }
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Rows;
