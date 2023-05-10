/* 
*📲 XMLHttpRequest es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs o APIs).
*/

// * Llamado al XMLHttpRequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// * Se escribe API en mayusculas porque sera un valor que no cambiara
const API = 'https://api.escuelajs.co/api/v1';

/*
 # Funcion que permitira recibir la url de la api y el callback que sera una funcion anonima,
 # para recibir la solicitud que nos este entregando el llamado a esta api
*/
function fetchData(urlAPI, callBack) {
  let xHttp = new XMLHttpRequest();

  // # open → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).
  xHttp.open('GET', urlAPI, true);

  /* 
  #📭 Los códigos de estados del servidor:

  * El código de estado(status codes) sirve para describir el estado de la petición hecha al servidor.

  * 1xx → Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
  * 2xx → Indican que la petición fue recibida, aceptada y procesada correctamente.
  * 3xx → Indican que hay que tomar acciones adicionales para completar la solicitud.
  * 4xx → Indican errores del lado del cliente que hizo mal una solicitud.
  * 5xx → Indican errores del servidor.Suelen aparecer cuando existe un fallo en la ejecución en el servidor.

  #📪 Existen 5 estados en un llamado XMLHttpRequest:
  
  * 0 → Se ha inicializado.
  * 1 → Loading (cargando).
  * 2 → Se ha cargado.
  * 3 → Procesamiento si existe alguna descarga.
  * 4 → Completado.
   
  #📬 Características del protocolo http:
.
  * Verbos: indican acciones que están asociadas a peticiones y recursos, es decir,
  * sirven para la manipulación de recursos cliente/servidor. Los Verbos http son:

  * GET → Solicita un recurso.
  * HEAD → Solicita un recurso pero sin retornar información, la estructura de esta petición es igual que get tanto en su headers como estatus. Es útil cuando vamos a utilizar API, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.
  * POST → Sirve para la creación de recursos en el servidor.
  * PUT → Actualiza por completo un recurso, reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
  * PATCH → Actualiza parcialmente un recurso.
  * DELETE → Elimina un recurso.
  */

  // # onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia.
  xHttp.onreadystatechange = event => {
    // # readyState → Retorna el estado de la petición. 
    // # status → Retorna el estado de la respuesta de la petición. (200,400,500, etc.)
    if (xHttp.readyState === 4) {
      if (xHttp.status === 200) {
        callBack(null, JSON.parse(xHttp.responseText));
      } else {
        const error = new Error(`Error ${xHttp.status} con la peticion a la url: ${urlAPI}`);
        return callBack(error, null);
      }
    }
  };

  // # send() → Envía la petición
  xHttp.send();
}

/* 
* el signo: ?, es un Optional chaining, permite leer el valor de una propiedad ubicada dentro de una cadena 
* de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea válida.
* Devolveria undefined en caso de que el valor no exista aun dentro del objeto
*/
// # Obtener todos los datos de un producto
// * Obtenemos todos los productos
fetchData(`${API}/products`, (error1, data1) => {
  if (error1) return console.error(error1);
  // * indicamos en la URL el id del producto en especifico a obtener
  fetchData(`${API}/products/${data1[0]?.id}`, (error2, data2) => {
    if (error2) return console.error(error2);
    // * indicamos en la URL el id de la categoria a la que pertenece el producto
    fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
      if (error3) return console.error(error3);

      // * Obtenemos toda la informacion del articulo que tenga la posicion 1(0)
      console.log(data1[0]);

      // * Obtenemos solo el nombre del producto
      console.log(data2?.title);

      // * Obtenemos el nombre de la categoria a la que pertenece el producto
      console.log(data3?.name);
    });
  });
});