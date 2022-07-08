import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getFoodByIngredient, getFoodByFirstName, getFoodByName } from '../Helpers/apiConexions';

export default function SearchBar() {
  const [item, setItem] = useState("");
  const [radioSelected, setRadioSelected] = useState("");

  const handleChange = ({ target: { value } }) => {
    return setItem(value);
  }

  const handleRadioButtons = ({ target: { value }}) => {
    return setRadioSelected(value);
  }

  const handleClick = () => {
    switch(radioSelected) {
      case 'ingredient':
        getFoodByIngredient(item);
        break;
      case 'name':
        getFoodByName(item);
        break;
      case 'firstLetter':
        getFoodByFirstName(item);
        break;
      default:
        break;
    }
  }
  
  return(
    <Form className="m-2">
      <Form.Group>
        <Form.Control data-testid="search-input" placeholder="Search Recipe" onChange={ handleChange } />
      </Form.Group>
      <Form.Check
        inline
        label="Ingrediente"
        name="searchItens"
        type="radio"
        data-testid="ingredient-search-radio"
        id={`inline-radio-1`}
        value="ingredient"
        onChange={ handleRadioButtons }

      />
      <Form.Check
        inline
        label="Nome"
        name="searchItens"
        type="radio"
        data-testid="name-search-radio"
        id={`inline-radio-2`}
        value="name"
        onChange={ handleRadioButtons }
      />
      <Form.Check
        inline
        label="Primeira Letra"
        name="searchItens"
        type="radio"
        data-testid="first-letter-search-radio"
        id={`inline-radio-3`}
        value="firstLetter"
        onChange={ handleRadioButtons }
      />
      <Button
        variant="primary"
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar
      </Button>
    </Form>
  )
}