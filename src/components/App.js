import React, { useState, useEffect } from "react";
import axios from 'axios';
import MovieList from "./MovieList";
import MovieModal from "./MovieModal";
import {Container, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap';
import Search from "./Search";

const MOVIE_API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=63d23804d429b63d14da130f0436dd12";
const SEARCH_API_URL = "https://api.themoviedb.org/3/search/movie?api_key=63d23804d429b63d14da130f0436dd12";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [modalState, setModal] = useState(false);
  const [curMovie, setCurMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await axios(MOVIE_API_URL);
      setMovies(result.data.results);
    }
    fetchData();
  }, []);

  const search = searchValue => {
    async function fetchData() {
      let result = ""
      if (searchValue !== "") {
        result = await axios(SEARCH_API_URL + "&query=" + searchValue);
      }
      else {
        result = await axios(MOVIE_API_URL);
      }
      setMovies(result.data.results);
    }
    fetchData();
  };

  const openModal = curMovie => {
    if (modalState === false) {
      setModal(true);
      setCurMovie(curMovie);
    }
  }

  const closeModal = () => {
    if (modalState === true) {
      setModal(false);
      setCurMovie();
    }
  }

  const handleSelect = e => {
    let NEW_SORT_URL = "https://api.themoviedb.org/3/discover/movie?api_key=63d23804d429b63d14da130f0436dd12&sort_by=";
    NEW_SORT_URL = NEW_SORT_URL + e + ".desc";
    
    async function fetchData() {
      const result = await axios(NEW_SORT_URL);
      setMovies(result.data.results);
    }
    fetchData();
  }

  return (
    <div className="App">
    <header className="App-header">
      <h1>Isaac's Movie App</h1>
    </header>
    <Container>
      <Row>
        <Col>
          <Search search={search}></Search>
        </Col>
        <Col>
          <DropdownButton id="dropdown-basic-button" title="Sort Movies">
            <Dropdown.Item onClick={()=>{handleSelect("popularity")}}>Popularity</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleSelect("revenue")}}>Revenue</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleSelect("vote_average")}}>Rating</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        <MovieList movies={movies} openModal={openModal}/>
        {(modalState === true) ? <MovieModal curMovie={curMovie} closeModal={closeModal} /> : false}
      </Row>
    </Container>
  </div>
  );
};

export default App;