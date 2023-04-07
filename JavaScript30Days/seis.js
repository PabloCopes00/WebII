"use strict";
// // // Estructura del bucle for
// // for(inicialización, condición, incremento/decremento){
// //     // el código va aquí
// //   }
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }
// //   // 0 1 2 3 4 5
// for (let i = 5; i >= 0; i--) {
//     console.log(i);
// }
// //   // 5 4 3 2 1 0
// for (let i = 0; i <= 5; i++) {
//     console.log(`${i} * ${i} = ${i * i}`);
// }
// //   0 * 0 = 0
// //   1 * 1 = 1
// //   2 * 2 = 4
// //   3 * 3 = 9
// //   4 * 4 = 16
// //   5 * 5 = 25

// countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
// newArr = [];
// for (let i = 0; i < countries.length; i++) {
//     newArr.push(countries[i].toUpperCase());
// }

// //   // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
// //   Agregar todos los elementos en un array

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// // console.log(sum); 15
// //   Crea un nuevo array basado en el array existente

// numbers = [1, 2, 3, 4, 5];
// newArr = [];
// sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     newArr.push(numbers[i] ** 2);
// }

// //   console.log(newArr); // [1, 4, 9, 16, 25]
// //   const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// //   const newArr = [];
// //   for (let i = 0; i < countries.length; i++) {
// //     newArr.push(countries[i].toUpperCase());
// //   }

// //   console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
// //   Bucle while
// //   let i = 0;
// //   while (i <= 5) {
// //     console.log(i);
// //     i++;
// //   }

// //   // 0 1 2 3 4 5
// //   Bucle do while
// //   let i = 0;
// //   do {
// //     console.log(i);
// //     i++;
// //   } while (i <= 5);

// //   // 0 1 2 3 4 5

// Ejercicios: Nivel 1
console.log(`\n\nEjercicios: Nivel 1:\n\n`);

const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
];

const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
for (let i = 0; i < 11; i++) {
    console.log("for", i);
}
// let i = 0;
// while (i < 11) {
//     console.log("while", i);
//     i++;
// }
// i = 0;
// do {
//     console.log("DoWhile", i)
//     i++;
// }
// while (i < 11)

// Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while
for (let i = 0; i > -1; i--) {

}
// Itera de 0 a n usando el bucle for
/** de 0 a n */
function bucleNascendente(n) {
    for (let i = 0; i < n; i++) {
        console.log("Funcion: bucleNascendente(n)", i);
    }
}
bucleNascendente(5);
// Escribe un bucle que haga el siguiente patrón usando console.log():
let hash = "";
for (let i = 0; i < 8; i++) {
    hash += "#"
    console.log(hash);
}
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

// Usa un bucle para imprimir el siguiente patrón:
for (let i = 0; i < 11; i++) {
    console.log(`${i} x ${i} = ${i * i}`);

}
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// .........
// 10 x 10 = 100

// Usando un bucle imprime el siguiente patrón:

for (let i = 0; i < 11; i++) {
    console.log(`${i}  ${i ** 2}  ${i ** 3}`);
}
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//...............
//  9    81    729
//  10   100   1000

// Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
/**imprime solo los pares hasta hasta n */
function even(n) {
    for (let i = 0; i < n; i++) {
        i % 2 == 0 && console.log(i); //crotada de ternario
    }
}
console.log(`Funcion even(7) hasta 6:`, even(7));


// Usa el bucle for para iterar de 0 a 100 e imprima solo números impares

function odd(n) {
    for (let i = 0; i < n; i++) {
        i % 2 != 0 && console.log(i); //crotada de ternario
    }
}
console.log(`Funcion odd(7) hasta 6:`, odd(7));
// Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos

// Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.

// La suma de todos los números de 0 a 100 es 5050.
// Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.

// La suma de todos los pares de 0 a 100 es 2550. Y la suma de todos los impares de 0 a 100 es 2500.
// Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array
/** suma de pares e impares desde 0 a n  */
function evenOdd(n) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < n; i++) {
        i % 2 == 0 ? even += i : odd += i;
    }
    let result = [even, odd, n]
    return result;
}
let tester = evenOdd(20);
console.log(`La suma de los numeros pares 0 a ${tester[2]} es: ${tester[0]}`);
console.log(`La suma de los numeros impares 0 a ${tester[2]} es: ${tester[1]}`);

function sumEvenOdd(n) {
    let even = [];
    let odd = [];
    for (let i = 0; i < n; i++) {
        i % 2 == 0 ? even.push(i) : odd.push(i);
    }

    let e = even.reduce(function (previous, current) { return previous + current })
    let o = odd.reduce(function (previous, current) { return previous + current })
    let result = [e, o, n]
    return result;
}
tester = sumEvenOdd(20);

console.log(`La suma de los numeros pares 0 a ${tester[2]} es: ${tester[0]}`);
console.log(`La suma de los numeros impares 0 a ${tester[2]} es: ${tester[1]}`);



//   [2550, 2500]
// Desarrolla un pequeño script que genera una matriz de 5 números aleatorios



// Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos

// Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:

// 5j2khz

// Ejercicios: Nivel 2
console.log(`\n\nEjercicios: Nivel 2:\n\n`);

// Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:
/** Random id  - randomId(length)*/
function randomId(n) {
    let id = "";
    for (let i = 0; i < n; i++) {
        id += `${Math.floor(Math.random() * 10)}`;
    }
    return id;
}
//let num = prompt("Ingrese cantidad de caracteres para su id random")
//let id = randomId(num);
//console.log(`tu id random de ${num} digitos es: ${id}`);

//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// Escribe un script que genere un número hexadecimal aleatorio.

function randomId(n) {
    let hexa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let id = "";
    for (let i = 0; i < n; i++) {
        id += `${hexa.charAt(Math.floor(Math.random() * hexa.length))}`;
    }
    return id;
}
//let num = prompt("Ingrese cantidad de caracteres para su id random")
//let id = randomId(num);
// console.log(`tu id random de ${num} caracteres hexadecimal es: ${id}`);

// crear un color aleatorio '#ee33df'
function randomColor() {
    let hexa = "abcdef1234567890";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += `${hexa.charAt(Math.floor(Math.random() * hexa.length))}`;
    }
    return color;
}
let color = randomColor();
console.log(`tu color random es: ${color}`);
// Escribe un script que genere un número de color rgb aleatorio.
function randomRGB() {
    let a = "";
    let b = "";
    let c = "";
    for (let i = 0; i < 3; i++) {
        a += `${Math.floor(Math.random() * 10)}`;
        b += `${Math.floor(Math.random() * 10)}`;
        c += `${Math.floor(Math.random() * 10)}`;
    }
    let color = `rgb(${a},${b},${c})`
    return color;
}
color = randomRGB();
console.log(`tu color RGB random es: ${color}`);

// rgb(240,180,80)

// Usando el array countries anterior, crea un array como el siguiente.

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// Usando el array countries anterior, crea un array para saber la longitud de cada país.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// Utiliza el array countries para crear la siguiente array de arrays

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
// En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.

// ['Finland','Ireland', 'Iceland']
// En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.

// ['Albania', 'Bolivia','Ethiopia']
// Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres.

// Ethiopia
// Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.

// ['Japan', 'Kenya']
// Encuentra la palabra más larga en el array webTechs

// Utiliza el array de webTechs para crear la el siguiente array de arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack

// Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.

// Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().

// Imprime todos los elementos del array como se muestra a continuación:

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
// Ejercicios: Nivel 3
console.log(`\n\nEjercicios: Nivel 3:\n\n`);
// Copia el array countries (Evita mutaciones)
// Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries
// Ordena el array webTechs y el array mernStack
// Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array
// Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
// Extrae todos los países que contienen la palabra 'land' del array countries e imprimela como un array
// Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array
// Invertir el array countries y poner en mayúscula cada país y almacenalo en un array
// Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array
function countriesChar(n) {
    let aux = [];
    for (let item of countries) {
        item.length == n ? aux.push(item) : null;
    }
    return aux;
}
// let num = prompt("ingrese cantidad de caracteres que desea buscar")
// let test = countriesChar(num);
// console.log(`Estos son los paises con ${num} letras.`, test);
let test = countriesChar(7);
console.log(`Estos son los paises con 7 letras.`, test);