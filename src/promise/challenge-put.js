import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function putData(urlAPI, data) {
  const response = fetch(urlAPI, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const dataToSend = {
  "title": "Nunca pares de aprender, prueba actualizacion",
  "price": 20000
}

putData(`${API}/products/205`, dataToSend) // * enviamos la informacion
  .then(response => response.json())  // * recibimos la informacion enviada 
  .then(datUpdate => console.log(datUpdate)) // * mostramos la informacion ya registrada
  .finally(() => console.log("done"));