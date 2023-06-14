/*
 * Un generador en JavaScript consta de una función generadora que muestra un objeto iterable Generator.
 * La palabra reservada yield se usa para pausar y reanudar una función generadora.
 * La estructura del Generador consta con la palabra function seguido de un asterísco * : function* ésta es una función generadora heredada.
  * El resultado que se quiere obtener se coloca al lado derecho de yield, puede ser de cualquier tipo 
  * (string, numérico, objetos, etc) y se puede tener tantos yield que se desee.
*/

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

/*
  * Para poder iterar con el generador, se puede inicializar un valor con la funcion generadora
  * next() permite acceder a la función del generador y obtener con yield dos valores: value y el estado de done
  * el cual se vuelve true hasta que haya obtenido todos los valores
 */
const g = gen();
console.log(g.next());
console.log(g.next().value); // * se indica value, para solo extraer el valor
console.log(g.next().value);
console.log(g.next());

// * Funcion que nos permitira iterar el array recibido
function* iterate(array) {
  for (let value of array) {
    yield value
  }
}

const it = iterate(['a', 'b', 'c', 'd']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);