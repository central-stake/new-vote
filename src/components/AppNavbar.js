import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Col,
  InputGroup
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const AppNavbar = ({ searchText, updateSearchText }) => {
  return (
    <Navbar bg="white" variant="light" expand="xs">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Col>
        <Link to="/">
          <Navbar.Brand>NewVote</Navbar.Brand>
        </Link>
      </Col>

      <SearchBar searchText={searchText} updateSearchText={updateSearchText} />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav></Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const SearchBar = ({ searchText, updateSearchText }) => {
  let history = useHistory();

  const onChange = (e) => {
    updateSearchText(e.target.value);
  };

  const onSubmit = (str) => {
    const to = {
      pathname: `/search`,
      search: `?q=${str}`,
      state: { searchTerm: str }
    };
    history.push(to);
  };

  return (
    <InputGroup className="col-xs-6 col-md-6">
      <FormControl
        type="input"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onSubmit(searchText);
          }
        }}
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
        value={searchText}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default AppNavbar;
