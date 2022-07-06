import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Food } from './Pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/comidas" element={ <Food /> } />
        <Route path="/bebidas" element={ <Login /> } />
        <Route path="/comidas/:id" element={ <Login /> } />
        <Route path="/bebidas/:id" element={ <Login /> } />
        <Route path="/comidas/:id/in-progress" element={ <Login /> } />
        <Route path="/bebidas/:id/in-progress" element={ <Login /> } />
        <Route path="/explorar" element={ <Login /> } />
        <Route path="/explorar/comidas" element={ <Login /> } />
        <Route path="/explorar/bebidas" element={ <Login /> } />
        <Route path="/explorar/comidas/ingredientes" element={ <Login /> } />
        <Route path="/explorar/bebidas/ingredientes" element={ <Login /> } />
        <Route path="/explorar/comidas/area" element={ <Login /> } />
        <Route path="/perfil" element={ <Login /> } />
        <Route path="/receitas-feitas" element={ <Login /> } />
        <Route path="/receitas-favoritas" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
