import React from "react";
import {Dropdown,DropdownButton, Col} from "react-bootstrap";

const Sort = ({handleSelect}) => {
  return (
    <Col>
      <DropdownButton id="dropdown-basic-button" title="Sort Movies">
        <Dropdown.Item
          onClick={() => {
            handleSelect("popularity", ".desc");
          }}
        >
          Popularity (Descending)
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("revenue", ".desc");
          }}
        >
          Revenue (Descending)
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("vote_average", ".desc");
          }}
        >
          Rating (Descending)
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("popularity", ".asc");
          }}
        >
          Popularity (Ascending)
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("revenue", ".asc");
          }}
        >
          Revenue (Ascending)
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleSelect("vote_average", ".asc");
          }}
        >
          Rating (Ascending)
        </Dropdown.Item>
      </DropdownButton>
    </Col>
  );
};

export default Sort;