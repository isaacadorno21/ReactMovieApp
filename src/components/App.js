import React, { useState, useEffect } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";
import MovieGallery from "./MovieGallery";
import MovieModal from "./MovieModal";
import Search from "./Search";
import ListView from "./MovieList";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Nav
} from "react-bootstrap";

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

  const handleSelect = e => {
    let NEW_SORT_URL =
      "https://api.themoviedb.org/3/discover/movie?api_key=63d23804d429b63d14da130f0436dd12&sort_by=";
    NEW_SORT_URL = NEW_SORT_URL + e + ".desc";

    async function fetchData() {
      const result = await axios(NEW_SORT_URL);
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
          <Col xs={5}>
            <Search search={search}></Search>
          </Col>
          <Col>
            <DropdownButton id="dropdown-basic-button" title="Sort Movies">
              <Dropdown.Item
                onClick={() => {
                  handleSelect("popularity");
                }}
              >
                Popularity
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleSelect("revenue");
                }}
              >
                Revenue
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleSelect("vote_average");
                }}
              >
                Rating
              </Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    manageViewType("gallery");
                  }}
                >
                  Gallery
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    manageViewType("list");
                  }}
                >
                  List
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          {viewType === "list" ? (
            <ListView />
          ) : (
            <MovieGallery movies={movies} openModal={openModal} />
          )}
          {modalState === true ? (
            <MovieModal
              curMovie={curMovie}
              closeModal={closeModal}
              modalMovieHelper={modalMovieHelper}
            />
          ) : (
            false
          )}
        </Row>
      </Container>
    </div>
  );
};

App.propTypes = {
  searchValue: PropTypes.string,
  curMovie: PropTypes.object,
  movie: PropTypes.object,
  e: PropTypes.string
};

export default App;
