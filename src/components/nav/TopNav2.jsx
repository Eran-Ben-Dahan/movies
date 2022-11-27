import React from "react";

import SearchBar from "../../components/searchBar/searchBar";
import { Navbar, Container} from "react-bootstrap";
import './TopNav2.css'
const TopNav2 = () => {
  return (
    <Navbar expand="lg" className="navbar2">
      <Container className="container">
        <SearchBar />
      
      </Container>
    </Navbar>
  );
};

export default TopNav2;
