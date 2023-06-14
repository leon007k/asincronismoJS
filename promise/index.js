/*
 * Las promesas son asíncronas, por lo que el código continuará su ejecución normalmente y luego dirá 
 * si la promesa se resolvió o se rechazó. Por lo que varias promesas pueden llegar a entrar en ejecución al 
 * mismo tiempo.
 * 
 # 🗃️ Una Promesa puede estar en uno de los siguientes estados:
.
 ! Pendiente pending → Una promesa inicia en este estado: no cumplida, no rechazada:
 * Una promesa inicialmente está pendiente.
 ! Cumplida fulfilled → Significa que la operación se completó satisfactoriamente, .then(va => …)
 * Cuando llamamos a resolve entonces la promesa pasa a estar resuelta.
 * Cuando una promesa se resuelve entonces se ejecuta la función que pasamos al método .then
 ! Rechazada rejected → significa que la operación falló, .catch(err => …)
 * Si llamamos a reject pasa a estar rechazada (obtenemos un error que nos va a indicar la razón del rechazo).
 * Si la promesa es rechazada entonces se ejecuta la función que pasamos a .catch
 * 
*/

const cows = 10;

/*
  * El parámetro resolve se utiliza para cuando la promesa devuelve el valor correctamente.
  * El parámetro reject, se usa en el que caso de que no funcione.
*/
const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("There are not enough cows on the farm");
  }
});


/*
* Con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
* Con .catch podemos obtener más información de un futuro error que se presente
* Con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa 
*/
countCows.then(result => {
  console.log(result);
}).catch(err => {
  console.error(err);
}).finally(() => {
  console.log("done");
});

/*
  # En este desafío tienes la función delay la cual se espera que un tiempo específico retorne un mensaje
  * La función deberá recibir dos parámetros:
  @ time: el tiempo de espera
  @ message: el mensaje que debe imprimir después del tiempo de espera
  * La función delay debe retornar una promesa para poderlo usarlo de forma asíncrona.
 */

function delay(time, message) {
  if (!time || typeof time !== 'number') throw new Error('time debe ser un número');

  return new Promise((resolve, reject) => {
    message.length > 0 ? setTimeout(() => {
      resolve(message);
    }, time) : reject("ingrese un mensaje");
  });
}

delay(2000, "Hello after 2s")
  .then((message) => console.log(message));