import React from "react";
//import { PropTypes } from "prop-types";
//import { Media } from "react-bootstrap";
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

export default MovieList;
