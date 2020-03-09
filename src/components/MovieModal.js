import React from 'react'
import {Button, Modal} from 'react-bootstrap'

const MovieModal = ({curMovie, closeModal}) => { 

	const poster_path = "https://image.tmdb.org/t/p/original"
	const cur_poster = poster_path.concat(curMovie.poster_path)

	return (
		<Modal size="lg" show={true} onHide={closeModal}>
		<h2>{curMovie.title}</h2>
		<img class="center"
          width="180"
          alt={`No Poster Available`}
          src={cur_poster}
        />
		<h4>Overview:</h4> {curMovie.overview}
		<p></p>

		<Button variant="danger" onClick={closeModal}>Close</Button>
		</Modal> 
	);
  }

export default MovieModal