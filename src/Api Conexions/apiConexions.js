import axios from 'axios';

const getFoodByIngredient = async (ingredient) => {
    const url = (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const { data: { meals } } = await axios.get(url);
    console.log(meals.length);

    return meals;
}

const getFoodByName = async (name) => {
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const { data: { meals } } = await axios.get(url);

    return meals;
}

const getFoodByFirstName = async (firstName) => {
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstName}`);
    const { data: { meals } } = await axios.get(url);
    
    return meals;
}

export {
    getFoodByIngredient,
    getFoodByName,
    getFoodByFirstName
};