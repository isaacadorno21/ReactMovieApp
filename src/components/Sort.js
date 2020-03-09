import React from "react";
import { PropTypes } from "prop-types";
import {Dropdown,DropdownButton, Col} from "react-bootstrap";

const Sort = ({handleSort}) => {
  return (
    <Col>
      <DropdownButton id="dropdown-basic-button" title="Sort Movies">
        <Dropdown.Item
          onClick={() => {
            handleSort("popularity", ".desc");
          }}
        >
          Popularity (Descending)
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSort("revenue", ".desc");
          }}
        >
          Revenue (Descending)
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSort("vote_average", ".desc");
          }}
        >
          Rating (Descending)
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSort("popularity", ".asc");
          }}
        >
          Popularity (Ascending)
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSort("revenue", ".asc");
          }}
        >
          Revenue (Ascending)
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSort("vote_average", ".asc");
          }}
        >
          Rating (Ascending)
        </Dropdown.Item>
      </DropdownButton>
    </Col>
  );
};

Sort.propTypes = {
  handleSort: PropTypes.func
}

export default Sort;