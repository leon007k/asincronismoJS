import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';


/*
  # Algunos Verbos http son:
  * GET → Sirve para solicitar recurso.
  * POST → Sirve para la creación de recursos en el servidor.
  * PUT → Sirve actualizar por completo un recurso.
  * DELETE → Sirve para eliminar un recurso.
.
  * ⚠️ Hay permisos que se deben tomar en cuenta para que el intercambio sea seguro, 
  * hay que especificar el modo (mode), aquí se indica si se permite solicitudes de origen cruzado.
.
  # 🔀 ¿Qué es un origen cruzado?
  * Un origen tiene dominio/protocolo/puerto, un origen cruzado denominado “Cross Origin” es la palabra 
  * que se utiliza para denominar el tipo de peticiones que se realizan a un dominio diferente del dominio de
  * origen desde donde se realiza la petición.
  * Así que si se coloca cors, indica que se permiten ciertas solicitudes predeterminadas de origen
  * cruzado como GET y POST para salvaguardar y evitar manipulaciones maliciosas.
*/

function postData(urlAPI, data) {
  const response = fetch(urlAPI, {
    method: 'POST', // * tiene que ir en mayúscula, se indica el tipo de peticion que se hara
    mode: 'cors', // * cors es el permiso que va a tener, por defecto va estar siempre en cors
    credentials: 'same-origin', // * es opcional
    headers: {
      'Content-Type': 'application/json' // * necesario indicar que lo que se está enviando es de tipo json
    },
    body: JSON.stringify(data) // * convierte un objeto o valor de JavaScript en una cadena de texto JSON
  });
  return response;
}

// * estructura de como debe ser el objeto que se quiere crear con POST 
const dataToSend = {
  "title": "Nunca pares de aprender",
  "price": 2,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

/*
* podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json 
* y mostrarlo después en la consola
*/
postData(`${API}/products`, dataToSend) // * enviamos la informacion
  .then(response => response.json())  // * recibimos la informacion enviada 
  .then(data => console.log(data)) // * mostramos la informacion ya registrada
  .finally(() => console.log("done"));