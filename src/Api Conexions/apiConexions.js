import axios from 'axios';

const getFoodByIngredient = async (ingredient) => {
    const { data: {meals} } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

    return meals;
}

const getFoodByName = async (name) => {
    const { data: {meals} } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);

    return meals;
}

const getFoodByFirstName = async (firstName) => {
    const { data: {meals} } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstName}`);
    
    return meals;
}

export {
    getFoodByIngredient,
    getFoodByName,
    getFoodByFirstName
};