import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Login() {
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
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Password">
        <Form.Control
          type="password"
          placeholder="Senha"
          data-testid="password-input"
        />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        data-testid="login-submit-btn"
        disabled
      >
        Entrar
      </Button>
    </Form>
  );
}
