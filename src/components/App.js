import React, { useState, useEffect } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";
import MovieGallery from "./MovieGallery";
import MovieList from "./MovieList";
import MovieModal from "./MovieModal";
import Search from "./Search";
import Sort from "./Sort";
import Filter from "./Filter";
import { Container, Row, Col, Nav} from "react-bootstrap";

const MOVIE_API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=63d23804d429b63d14da130f0436dd12";
const SEARCH_API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=63d23804d429b63d14da130f0436dd12";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [modalState, setModal] = useState(false);
  const [curMovie, setCurMovie] = useState();
  const [viewType, setViewType] = useState("gallery");

  useEffect(() => {
    async function fetchData() {
      const result = await axios(MOVIE_API_URL);
      setMovies(result.data.results);
    }
    fetchData();
  }, []);

  const search = searchValue => {
    async function fetchData() {
      let result = "";
      if (searchValue !== "") {
        result = await axios(SEARCH_API_URL + "&query=" + searchValue);
      } else {
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
  };

  const closeModal = () => {
    if (modalState === true) {
      setModal(false);
      setCurMovie();  
    }
  };

  const modalMovieHelper = movie => {
    setCurMovie(movie);
  };

  const handleSort = (e, type) => {
    let NEW_SORT_URL =
      "https://api.themoviedb.org/3/discover/movie?api_key=63d23804d429b63d14da130f0436dd12&sort_by=";
    NEW_SORT_URL = NEW_SORT_URL + e + type;

    async function fetchData() {
      const result = await axios(NEW_SORT_URL);
      console.log(result.data.results);
      setMovies(result.data.results);
    }
    fetchData();
  };

  const handleFilter = genre => {
    let NEW_FILTER_URL = "https://api.themoviedb.org/3/discover/movie?api_key=63d23804d429b63d14da130f0436dd12&sort_by=popularity.desc&with_genres=";
    NEW_FILTER_URL = NEW_FILTER_URL + genre;

    async function fetchData() {
      const result = await axios(NEW_FILTER_URL);
      setMovies(result.data.results);
    }
    fetchData();
  };

  const manageViewType = view => {
    if (view === "list") {
      setViewType("list");
    } else if (view === "gallery") {
      setViewType("gallery");
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Isaac's Movie App</h1>
      </header>
      <Container>
        <Row>
          {viewType === "list" ? (<Col xs={12}><Search search={search}></Search><Sort handleSort={handleSort}/></Col>)
          : (<Filter handleFilter={handleFilter}></Filter>)}
          <Col>
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link onClick={() => {manageViewType("gallery");}}>
                  Gallery
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => {manageViewType("list");}}>
                  List
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          {viewType === "list" ? (<MovieList movies={movies} openModal={openModal} />)
          : (<MovieGallery movies={movies} openModal={openModal} />)}
          {modalState === true ? (<MovieModal curMovie={curMovie} closeModal={closeModal} modalMovieHelper={modalMovieHelper} />)
          : (false)}
        </Row>
      </Container>
    </div>
  );
};

App.propTypes = {
  searchValue: PropTypes.string,
  curMovie: PropTypes.object,
  movie: PropTypes.object,
  movies: PropTypes.array,
  e: PropTypes.string,
  type: PropTypes.string,
  genre: PropTypes.number,
  view: PropTypes.string
};

export default App;
