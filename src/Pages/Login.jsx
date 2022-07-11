import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getItemLocalStorage, setItemLocalStorage } from '../Helpers/Utils';
import loginSchema from '../Helpers/validation';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const tokenTest = 1;

  const validation = () => {
      const { error } = loginSchema.validate({ email, password });  
      return error? setDisabled(true) : setDisabled(false);
  };

  const handleChange = ({ target: { name, value } }) => {
    name === 'email'? setEmail(value) : setPassword(value);
    return validation();
  };

  const emailAllreadyExist = () => {
    const emailFromStorage = getItemLocalStorage('user');
    return emailFromStorage === email ? navigate('/comidas') : true;
  };

  const handleSubmit = () => {
    emailAllreadyExist();
    setItemLocalStorage('mealsToken', tokenTest);
    setItemLocalStorage('cocktailsToken', tokenTest);
    setItemLocalStorage('user', { email });
    setItemLocalStorage('doneRecipes', []);
    setItemLocalStorage('favoriteRecipes', []);
    setItemLocalStorage('inProgressRecipes', []);
    return navigate('/comidas');
  };

  return(
    <Form>
      <h1>
        Login
      </h1>
      <Form.Group className="mb-3" controlId="Email">
        <Form.Control
          type="email"
          placeholder="Email"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ handleChange }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Password">
        <Form.Control
          type="password"
          placeholder="Senha"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ handleChange }
        />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ handleSubmit }
      >
        Entrar
      </Button>
    </Form>
  );
}
