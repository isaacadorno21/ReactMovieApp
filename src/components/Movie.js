import React from "react";

const Movie = ({ movie, openModal }) => {
  const poster_path = "https://image.tmdb.org/t/p/original"
  const cur_poster = poster_path.concat(movie.poster_path)
  return (
    <div className="movie" onClick={()=>{openModal(movie)}}>
      <h5>{movie.title}</h5>
      <div>
        <img
          width="250"
          alt={`No Poster Available`}
          src={cur_poster}
        />
      </div>
      <p>({movie.release_date})</p>
    </div>
  );
};

export default Movie;