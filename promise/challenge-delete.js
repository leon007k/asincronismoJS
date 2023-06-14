import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function deleteData(urlAPI) {
  const response = fetch(urlAPI, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    // * body: JSON.stringify(data), No es necesario el body, por el tipo de respuesta a obtener
  });
  return response;
}

const idDataToDelete = 205;

deleteData(`${API}/products/${idDataToDelete}`) // * enviamos la informacion 
  .then(dataDelete => {
    // * mostramos mensaje con exito
    console.log(dataDelete ? `producto ${idDataToDelete} eliminado` : 'el producto no se elimino');
  })
  .finally(() => console.log("done"));