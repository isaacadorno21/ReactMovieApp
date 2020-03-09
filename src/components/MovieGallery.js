import React from "react";
import { PropTypes } from "prop-types";
import { Row, Col } from "react-bootstrap";
import Movie from "./Movie";

const MovieList = ({ movies, openModal }) => {
  const movieColumns = movies.map(movie => (
    <Col className="col-movieColumn" key={movie.id} md={4} lg={3}>
      <Movie movie={movie} openModal={openModal} />
    </Col>
  ));

  return <Row>{movieColumns}</Row>;
};

MovieList.propTypes = {
  movieColumns: PropTypes.string,
  movies: PropTypes.array,
  openModal: PropTypes.func
};

export default MovieList;
