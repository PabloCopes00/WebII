// let a = "JavaScript"; // es un scope global que se encontrará en cualquier parte de este archivo
// let b = 10; // es un scope global que se encontrará en cualquier parte de este archivo
// // Scope de la función
// function letsLearnScope() {
//   console.log(a, b); // JavaScript 10, accesible
//   let value = false;
//   // Scope del bloque
//   if (true) {
//     // podemos acceder desde la función y fuera de la función pero
//     // las variables declaradas dentro del if no serán accesibles fuera del bloque if
//     let a = "Python";
//     let b = 20;
//     let c = 30;
//     let d = 40;
//     value = !value;
//     console.log(a, b, c, value); // Python 20 30 true
//   }
//   // no podemos acceder a c porque el scope de c es sólo el bloque if
//   console.log(a, b, value); // JavaScript 10 true
// }
// letsLearnScope();
// console.log(a, b); // JavaScript 10, accesible

function letsLearnScope() {
    var gravity = 9.81;
    console.log(gravity);
}
console.log(gravity, "declarada con var no se conoce fuera de la funcion") //, Uncaught ReferenceError: la gravedad no está definida

if (true) {
    var gravity = 9.81;
    console.log(gravity); // 9.81
}
console.log(gravity); // 9.81
function forVar() {
    for (var i = 0; i < 3; i++) {
        console.log(i); // 0, 1, 2
    }
    console.log(i); // 3
}
forVar();


for (let i = 0; i < 3; i++) {
    console.log(i, "declarado con let"); // 0, 1, 2
}
console.log(i, "declarado con let"); // 3


