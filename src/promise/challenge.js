import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

/*
  * función que va a recibir como argumento la url que queremos llamar y esto retornará el 
  * llamado de fecth: el cual es una promesa
  *
*/
function fetchData(urlAPI) {
  return fetch(urlAPI);
}

/* fetchData(`${API}/products/5`)
  .then(response => response.json()) // se tranforman los datos a objeto JSON
  .then(products => {
    console.log(products); // Mostramos lo que obtenemos en consola
  }).catch(err => {
    console.error(err); // Mostrar el error en la consulta
  }); */

// # replicamos el challenge que se realizo con los callbacks, obteniendo el producto 5
fetchData(`${API}/products`)
  .then(response => response.json()) // se transforman los datos a objeto JSON
  .then(products => { return fetchData(`${API}/products/${products[4].id}`) }) // Se obtiene info del producto 5
  .then(response => response.json()) // se transforman los datos del producto 5 a objeto JSON
  .then(products => {
    console.log(products); // se imprime toda la info del producto
    console.log(products?.title); // se imprime solo el nombre del producto
    return fetchData(`${API}/categories/${products.category?.id}`) // se obtiene la categoria del producto
  })
  .then(response => response.json()) // se transforma los datos de la categoria del producto 5 a objeto JSON
  .then(category => console.log(category?.name)) // se obtiene el nombre de la categoria del producto 5
  .catch(err => console.error(err))
  .finally(() => console.log('done')); // se indica que se termino la solicitud

