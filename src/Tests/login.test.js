import React from 'react'
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Login page test', () => {
  const emailTest = 'test@email.com';
  const passwordTest = '123456';
  
  test('There is a h1 with value "login"', () => {
    renderWithRouter(<App />);

    const header = screen.getByRole('heading', {
      name: /login/i,
      level: 1,
    });
    expect(header).toBeInTheDocument();
  });
  
  test('the inputs working correctly', () => {
    renderWithRouter(<App />);
    
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    fireEvent.change(emailInput, { target: { value: emailTest } });
    fireEvent.change(passwordInput, { target: { value: passwordTest } });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(emailInput).toHaveValue(emailTest);
    expect(passwordInput).toHaveValue(passwordTest);
  });

  test('button starts disabled', () => {
    renderWithRouter(<App />);

    const button = screen.getByRole('button', {
      name: /entrar/i,
    });

    expect(button).toBeDisabled();
  });

  test('Button works correctly', () => {
    renderWithRouter(<App />);

    const button = screen.getByRole('button', {
      name: /entrar/i,
    });
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Senha');

    fireEvent.change(emailInput, { target: { value: emailTest } });
    fireEvent.change(passwordInput, { target: { value: passwordTest } });

    expect(button).toBeEnabled();

    fireEvent.click(button);
    expect(window.location.pathname).toBe('/comidas');
  });
});
