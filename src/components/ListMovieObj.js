import React from "react";
import { PropTypes } from "prop-types";
import { Row } from "react-bootstrap";

const ListMovieObj = ({movie, openModal}) => {
  const poster_path = "https://image.tmdb.org/t/p/original";
  const cur_poster = poster_path.concat(movie.poster_path);
  return (
    <Row>
      <div className="movie" onClick={() => {openModal(movie);}}>
        <img width="100" alt={"No Poster Available"} src={cur_poster} />
      </div>
      <h5>{movie.title}</h5>
      <p>({movie.release_date})</p>
    </Row>
  );
};

ListMovieObj.propTypes = {
  poster_path: PropTypes.string,
  cur_poster: PropTypes.string,
  movie: PropTypes.object,
  openModal: PropTypes.func
};

export default ListMovieObj;
