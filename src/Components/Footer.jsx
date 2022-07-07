import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import drinkIcons from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

export default function Footer() {
  const navigate = useNavigate();

  const handleFooterIcons = ({ target: { id }}) => {
    switch (id) {
      case 'drink-icon':
        navigate('/bebidas');
        break;
      case 'explore-icon':
        navigate('/explorar');
        break;
      case 'meal-icon':
        navigate('/comidas');
        break;
      default:
        break;
    }
  };

  return (
    <footer className="footer-container" data-testid="footer">
      <Navbar className="footer-container" bg="light">
          <Container>
          <Navbar.Brand data-testid="profile-top-btn">
            <button  type="button" onClick={ handleFooterIcons }>
              <img id="drink-icon"  src={ drinkIcons } alt="Drink Icon" />
            </button>
          </Navbar.Brand>
          <Navbar.Brand>
            <button type="button" onClick={ handleFooterIcons }>
              <img id="explore-icon" src={ exploreIcon } alt="search icon" />
            </button>
          </Navbar.Brand>
          <Navbar.Brand data-testid="search-top-btn">
            <button type="button" onClick={ handleFooterIcons }>
              <img id="meal-icon"  src={ mealIcon } alt="Search Icon"/>
            </button>
          </Navbar.Brand>
          </Container>
        </Navbar>
    </footer>
  )
};
