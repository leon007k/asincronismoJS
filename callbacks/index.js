// * 🪃 Un Callback es una una función que se pasa como argumento de otra función y que será invocada.
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callBack) {
  return callBack(num1, num2);
}

console.log(calc(2, 5, sum));


function greeting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'carlos');