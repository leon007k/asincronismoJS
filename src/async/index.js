/*
  #🔁 ¿Qué es una función asíncrona?
  * La declaración de función async define una función asíncrona que devuelve un objeto, 
  * lo cual permite a un programa correr una función sin congelar todo la compilación.
  * Dada que la finalidad de las funciones async/await es simplificar el comportamiento del uso 
  * síncrono de promesas, se hace más fácil escribir promesas.
*/

const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!'), 2000)
      : reject(new Error('Error!'));
  });
};

// * la palabra async es para el cuerpo de la función
const anotherFn = async () => {
  // * la palabra await estará dentro de la lógica a implementar y regresa una promesa
  const something = await fnAsync();
  console.log(something);
  // * Esto se va a imprimir, hasta que termine la espera
  console.log("Hello!");
};

console.log("Before");
anotherFn();
console.log("After");

