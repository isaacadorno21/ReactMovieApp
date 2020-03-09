import React from "react";
import { PropTypes } from "prop-types";
import {Dropdown,DropdownButton, Col} from "react-bootstrap";

const Filter = ({handleFilter}) => {

  const action = 28;
  const adventure = 12;
  const animation = 16;
  const comedy = 35;
  const crime = 80;
  const documentary = 99;
  const drama = 18;
  const family = 10751;
  const fantasy = 14;
  const history = 36;
  const horror = 27;
  const music = 10402;
  const mystery = 9648;
  const romance = 10749;
  const scifi = 878;
  const tv = 10770;
  const thriller = 53;
  const war = 10752;
  const western = 37;
    
  return (
    <Col>
      <DropdownButton id="dropdown-basic-button" title="Filter Movies">
        <Dropdown.Item
          onClick={() => {
            handleFilter(action);
          }}
        >
          Action
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(adventure);
          }}
        >
          Adventure
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(animation);
          }}
        >
          Animation
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(comedy);
          }}
        >
          Comedy
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(crime);
          }}
        >
          Crime
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(documentary);
          }}
        >
          Documentary
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(drama);
          }}
        >
          Drama
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(family);
          }}
        >
          Family
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(fantasy);
          }}
        >
          Fantasy
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(history);
          }}
        >
          History
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(horror);
          }}
        >
          Horror
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(music);
          }}
        >
          Music
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(mystery);
          }}
        >
          Mystery
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(romance);
          }}
        >
          Romance
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(scifi);
          }}
        >
          Sci-Fi
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(tv);
          }}
        >
          TV Movie
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(thriller);
          }}
        >
          Thriller
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(war);
          }}
        >
          War
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleFilter(western);
          }}
        >
          Western
        </Dropdown.Item>
      </DropdownButton>
    </Col>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func,
  action : PropTypes.number,
  adventure : PropTypes.number,
  animation : PropTypes.number,
  comedy : PropTypes.number,
  crime : PropTypes.number,
  documentary : PropTypes.number,
  drama : PropTypes.number,
  family : PropTypes.number,
  fantasy : PropTypes.number,
  history : PropTypes.number,
  horror : PropTypes.number,
  music : PropTypes.number,
  mystery : PropTypes.number,
  romance : PropTypes.number,
  scifi : PropTypes.number,
  tv : PropTypes.number,
  thriller : PropTypes.number,
  war : PropTypes.number,
  western : PropTypes.number
};

export default Filter;
