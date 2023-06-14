import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';


/* 
  * Resolviendo challenge con promesas, obteniendo el producto 6 y su nombre 
*/
function* fetchData(urlAPI) {
  yield fetch(urlAPI);
}

fetchData(`${API}/products/6`).next().value
  .then(response => response.json())
  .then(product => console.log(product?.title));

/* 
  * Resolviendo challenge con async await, obteniendo el producto 6 y nombre de la categoria 
*/
async function* fetchDataAsync(urlAPI) {
  const response = await fetch(urlAPI);
  return yield await response.json();
}

fetchDataAsync(`${API}/products/6`).next().then(({ value, done }) => {
  console.log(value.category.name);
});
