import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Movie from "./Movie";

const styles = {
  movieColumn: {
    marginTop: 20,
    marginBottom: 20
  }
}

const MovieList = ({movies, openModal}) => {

  const movieColumns = movies.map(movie => (
    <Col style={styles.movieColumn} key={movie.id} md={4} lg={3}>
      <Movie movie={movie} openModal={openModal} />
    </Col>
  ))

  return (
    <Row>
      {movieColumns}
    </Row>
  );
}

export default MovieList;