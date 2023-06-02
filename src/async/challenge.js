import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// * Funcion encargada de hacer peticion de los datos
async function fetchData(urlAPI) {
  const response = await fetch(urlAPI);
  const data = await response.json(); // * Transformamos la informacion recibida
  return data;
}

// * Funcion encargada de obtener datos especificos 
const specificData = async (urlAPI) => {
  try {
    const products = await fetchData(`${urlAPI}/products`); // * indicamos que nos de todos los productos
    const product = await fetchData(`${urlAPI}/products/${products[3].id}`); // * obtenemos el 4 producto
    const category = await fetchData(`${urlAPI}/categories/${product?.category.id}`); // * obtenemos categoria

    console.log(product); // * mostramos toda la info del 4 producto
    console.log(product?.title); // * mostramos solo el nombre del producto
    console.log(category?.name); // * mostramos
  } catch (error) {
    console.error(error);
  }
};

specificData(API);