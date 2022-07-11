import React from 'react';
import { useState, useEffect } from 'react';
import { getDrinkCategories, getFirstDrinkRecipes } from '../Helpers/apiConexions';

export default function MainDrink() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getFirstRecipes() {
      const data = await getFirstDrinkRecipes();
      const categories = await getDrinkCategories();
      setCategories(categories);
      setRecipes(data);
    }
    getFirstRecipes();
  }, []);

  return (
    <>
      {categories.map((category) => {
        return (
          <nav key={ category.strCategory }>
            <button>
              { category.strCategory }
            </button>
          </nav>
        )
      })}
      {recipes.map((recipe) => {
        return (
          <section key={ recipe.idDrink }>
            <img src={ recipe.strDrinkThumb } alt={ recipe.strDrink } width="125px" />
            <h6>{ recipe.strDrink }</h6>
          </section>
        )
      })}
    </>
  );
};


