import axios from 'axios';

const getFoodByIngredient = async (ingredient) => {
  const { data: { meals } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  return meals;
};

const getFoodByName = async (name) => {
  const { data: { meals } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  return meals;
};

const getFoodByFirstName = async (firstName) => {
  const { data: { meals } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstName}`);
  return meals;
};

const getFirstFoodRecipes = async () => {
  const { data: { meals } } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  return meals.slice(0, 12);
};

const getFirstDrinkRecipes = async () => {
  const { data: { drinks } } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  return drinks.slice(0, 12);
};

const getFoodCategories = async () => {
  const { data: { meals } } = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  return meals.slice(0, 5);
};

const getDrinkCategories = async () => {
  const { data: { drinks } } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  return drinks.slice(0, 5);
};

export {
    getFoodByIngredient,
    getFoodByName,
    getFoodByFirstName,
    getFirstFoodRecipes,
    getFirstDrinkRecipes,
    getFoodCategories,
    getDrinkCategories,
};
