import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import ProfileTop from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import { useNavigate } from 'react-router-dom';
import SearchBar from "./SearchBar";

export default function Header() {
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  
  const handleClick = ({ target: { name } }) => {
    if (name === 'profileTop') {
      return navigate('/perfil');
    }
    return setHidden(!hidden);
  }

  return(
    <header>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand data-testid="profile-top-btn">
            <button type="button" onClick={ handleClick }>
              <img name="profileTop" src={ ProfileTop } alt="Profile Icon" />
            </button>
          </Navbar.Brand>
          <Navbar.Brand>
            <h1 data-testid="page-title">
              Comidas
            </h1>
          </Navbar.Brand>
          <Navbar.Brand data-testid="search-top-btn">
            <button type="button" onClick={ handleClick }>
              <img name="searchIcon" src={ SearchIcon } alt="Search Icon"/>
            </button>
          </Navbar.Brand>
        </Container>
      </Navbar>
      { hidden === false ? <SearchBar /> : <p> </p>}
    </header>
  )
}