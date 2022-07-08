import React from "react";
import { useState, useEffect } from "react";
import { getFirstFoodRecipes } from "../Helpers/apiConexions";

export default function MainFood() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getFoodRecipes() {
      const data = await getFirstFoodRecipes();
      setRecipes(data);
    }
    getFoodRecipes();
  }, []);

  console.log(recipes);

  return (
    recipes.map((recipe) => {
      return (
        <section key={ recipe.idMeal }>
          <img src={ recipe.strMealThumb } alt={ recipe.Meal } width="125px" />
          <h6>{ recipe.strMeal }</h6>
        </section>
      )
    })
  )
};
