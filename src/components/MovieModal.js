import React from 'react'
import {Button, Modal, Row, Col} from 'react-bootstrap'
import axios from 'axios';


const MovieModal = ({curMovie, closeModal, modalMovieHelper}) => { 

	const poster_path = "https://image.tmdb.org/t/p/original"
	const cur_poster = poster_path.concat(curMovie.poster_path)

	return (
		<Modal size="lg" show={true} onHide={closeModal}>
			<Col>
			<h2>{curMovie.title}</h2>

			
			<Row> 
				<a class="prev" onClick={()=>{changeMovie(curMovie, -1, modalMovieHelper)}}>&#10094;</a>
				
				<img class="center"
				width="180"
				alt={`No Poster Available`}
				src={cur_poster}/>

				<a class="next" onClick={()=>{changeMovie(curMovie, 1, modalMovieHelper)}}>&#10095;</a>
			</Row>

			<h4>Overview:</h4> {curMovie.overview}
			<p></p>
			</Col>
			<Button variant="danger" onClick={closeModal}>Close</Button>
		</Modal> 
	);
  }

  function changeMovie(movie, num, modalMovieHelper) {
 	  const tmdbPath = "https://api.themoviedb.org/3/movie/" 
	  const apiPath = "?api_key=63d23804d429b63d14da130f0436dd12";
	  let newMoviePath = tmdbPath + (movie.id + num) + apiPath;
	  return axios.get(newMoviePath).then(response => {
		modalMovieHelper(response.data);
	  })
  }

export default MovieModal