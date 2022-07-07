import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getFoodByIngredient, getFoodByFirstName, getFoodByName } from '../Api Conexions/apiConexions';

export default function SearchBar() {
  const [item, setItem] = useState("");
  const [radioSelected, setRadioSelected] = useState("");

  const handleChange = ({ target: { value } }) => {
    setItem(value);

  }

  const handleRadioButtons = ({ target: { value }}) => {
    setRadioSelected(value);
  }

  const handleClick = () => {
    if (radioSelected === 'ingredient') {
      return getFoodByIngredient(item);
    }
    if (radioSelected === 'name') {
      return getFoodByName(item);
    }
    if (radioSelected ==='firstLetter') {
      return getFoodByFirstName(item);
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