const setItemLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
};

const getItemLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export {
  setItemLocalStorage,
  getItemLocalStorage,
};
