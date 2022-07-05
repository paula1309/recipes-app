import React from 'react';
import PropTypes from 'prop-types';
import context from './context';

export default function Provider({ children }) {
  const myProvider = {};
  return (
    <context.Provider value={ myProvider }>
      { children }
    </context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
