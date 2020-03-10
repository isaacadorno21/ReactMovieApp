import React from "react";
import { PropTypes } from "prop-types";
import { Row, Col } from "react-bootstrap";
import ListMovieObj from "./ListMovieObj";

const MovieList = ({movies, openModal}) => {
  const movieRows = movies.map(movie => (
    <Row className="movieRowList" key={movie.id}>
      <ListMovieObj movie={movie} openModal={openModal}/>
    </Row>
  ));

  return <Col>{movieRows}</Col>;
}

MovieList.propTypes = {
  movieRows: PropTypes.array,
  movies: PropTypes.array,
  openModal: PropTypes.func
};

export default MovieList;
