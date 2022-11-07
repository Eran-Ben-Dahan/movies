import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import TopNavLink from "./TopNavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./TopNav.css";
// import Swal from "sweetalert2";
import Login from './Login'
import BtnDarkMode from './BtnDarkMode/BtnDarkMode'
import SearchBar from '../../components/searchBar/searchBar'

const TopNav = () => {
  return (
    <Navbar  expand="lg" className="navbar">
      <Container className="container">
        {/* BRAND: logo + app name */}
        <NavLink to="/" className="navbar-brand">
        <span className="text-muted" color="#ffd700">Movie App</span>
          <BiCameraMovie className="logoIcon" color="#ffd700" />
        </NavLink>
        {/* BURGER */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="color=FFDE00" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <TopNavLink to="/home" label="Home" />
            <TopNavLink to="/movies" label="Movies" />
            <NavDropdown to="/movies" label="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item href="/movies/action">Action</NavDropdown.Item>
              <NavDropdown.Item href="/movies/comedy">Comedy </NavDropdown.Item>
              <NavDropdown.Item href="/movies/drama">Drama</NavDropdown.Item>
              <NavDropdown.Item href="/movies/thriller">Thriller </NavDropdown.Item>
              <NavDropdown.Item href="/movies/animation"> Animation</NavDropdown.Item>
              <NavDropdown.Item href="/movies/crime">Crime</NavDropdown.Item>
              <NavDropdown.Item href="/movies/fantasy">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="/movies/history">History</NavDropdown.Item>
              <NavDropdown.Item href="/movies/romance">Romance</NavDropdown.Item>
              <NavDropdown.Item href="/movies/war">War</NavDropdown.Item>
              <NavDropdown.Item href="/movies/music">Music</NavDropdown.Item>
            </NavDropdown>
            <TopNavLink to="/favorites" label="Favorites" />
            <TopNavLink to="/comments" label="Comments" />
            <TopNavLink to="/about" label="About" />
            <BtnDarkMode/>
            <SearchBar/>
            <Login/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
