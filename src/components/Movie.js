import React from "react";
import { PropTypes } from "prop-types";
//import missing from "../assets/missing.png";

const Movie = ({ movie, openModal }) => {
  const poster_path = "https://image.tmdb.org/t/p/original";
  const cur_poster = poster_path.concat(movie.poster_path);
  return (
    <div
      className="movie"
      onClick={() => {
        openModal(movie);
      }}
    >
      <h5>{movie.title}</h5>
      <div>
        <img width="250" alt={"No Poster Available"} src={cur_poster} />
      </div>
      <p>({movie.release_date})</p>
    </div>
  );
};

Movie.propTypes = {
  poster_path: PropTypes.string,
  cur_poster: PropTypes.string,
  movie: PropTypes.object,
  openModal: PropTypes.func
};

export default Movie;
