import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ProfileTop from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

export default function Main() {
  return(
    <header>
      <Navbar bg="light">
        <Container>
            <Navbar.Brand data-testid="profile-top-btn">
              <img src={ ProfileTop } />
            </Navbar.Brand>
            <Navbar.Brand>
              <h1 data-testid="page-title">
                Comidas
              </h1>
            </Navbar.Brand>
            <Navbar.Brand data-testid="search-top-btn">
              <img src={ SearchIcon } />
            </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}