import React from 'react';
import { useState, useEffect } from 'react';
import { getFirstDrinkRecipes } from '../Helpers/apiConexions';

export default function MainDrink() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getFirstRecipes() {
      const data = await getFirstDrinkRecipes();
      setRecipes(data);
    }
    getFirstRecipes();
  }, []);

  return (
    recipes.map((recipe) => {
      return (
        <section key={ recipe.strDrink }>
          <img src={ recipe.strDrinkThumb } alt={ recipe.strDrink } width="125px" />
          <h6>{ recipe.strDrink }</h6>
        </section>

      );
    })
  );
};
