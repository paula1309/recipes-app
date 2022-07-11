import React from "react";
import { useState, useEffect } from "react";
import { getFirstFoodRecipes, getFoodCategories } from "../Helpers/apiConexions";

export default function MainFood() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getFoodRecipes() {
      const recipes = await getFirstFoodRecipes();
      const categories = await getFoodCategories();
      setCategories(categories);
      setRecipes(recipes);
    }
    getFoodRecipes();
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
          <section key={ recipe.idMeal }>
            <img src={ recipe.strMealThumb } alt={ recipe.Meal } width="125px" />
            <h6>{ recipe.strMeal }</h6>
          </section>
        )
      })}
    </>
  )
};
