import axios from 'axios';

const URL = 'https://dummyjson.com/products?limit=10';
let data = null;

export const fetchProducts = () => {
  return axios
    .get(URL)
    .then(function (response) {
      // обработка успешного запроса
      console.log('done');
      return data = response;
    })
    .catch(function (error) {
      // обработка ошибки
      console.log(error);
    })
    .finally(function () {
      // выполняется всегда
    });
};

export const getProducts = () => {
  return data;
};

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // обработка успешного запроса
//     console.log(response);
//   })
//   .catch(function (error) {
//     // обработка ошибки
//     console.log(error);
//   })
//   .finally(function () {
//     // выполняется всегда
//   });
