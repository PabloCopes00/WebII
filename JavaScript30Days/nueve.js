"use strict";

// una función callback, el nombre de la función puede ser cualquier nombre
const callback = (n) => {
  return n ** 2
}
// función que toma otra función como callback
function cube(callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3))
// primero hace n al cuadrado (3**3=9). y ese resultado lo multiplica x n (9*3=27)

function first(second) {
  setTimeout(function () {
    console.log(`primero`);
    second();
  }, 3000);
}
function second() {
  console.log(`segundo`);
}
first(second);

// Función de orden superior que devuelve otra función
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers));

let arr = [1, 4, 5, 7, 9, 0]
arr.forEach((element, index, arr) => console.log("element, index, array", index, element, arr));


/*
map: Iterar los elementos de un array y modificar los elementos del mismo. Toma una función callback con elementos, índice , parámetro del array y devuelve un nuevo array.
*/

const numbersSquare = numbers.map((num) => num * num);
console.log("usando map", numbers, numbersSquare);

const names = ["Asabeneh", "Pablo", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(names, namesToUpperCase);

const countries = [
  "Argentina",
  "Albania",
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

const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
);
console.log("Map procesa la funcion callback y guarda el resultado en un nuevo array", countries, countriesFirstThreeLetters);

/* Filter: Filtra los elementos que cumplen las condiciones de filtrado y devuelve un nuevo array. */
//Filtrar los países que contienen land
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log("Usando Filter para chequear paises que incluyen land", countriesContainingLand);

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
);
console.log("Usando Filter para filtrar Paises con 5 letras", countriesHaveFiveLetters);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "Pablo", score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scores, "Array usando Filter para solo agregar al array los puntajes mayores de 80", scoresGreaterEighty);

//ordenar esos scores con SORT, seria algo como....
let copyScores = JSON.parse(JSON.stringify(scores));
console.log("scores ordenados.", scores, copyScores.sort((a, b) => b.score - a.score));


/* reduce: Reduce toma una función callback. La función callback toma como parámetro el acumulador, el valor actual y opcional el valor inicial y retorna un único valor. Es una buena práctica definir un valor inicial para el valor del acumulador. Si no especificamos este parámetro, por defecto el acumulador obtendrá el primer valor del array. Si nuestro array es un array vacío, entonces Javascript lanzará un error. */

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log("Usando Reduce numbers.reduce((acumulador, valor actual) => acumulador + valor actual, 0 (desde donde inicia el acumulador, por defecto arranca con el primer numero del array a no ser que lo definamos.))", numbers, sum);

// every: Comprueba si todos los elementos son similares en un aspecto. Devuelve un booleano
const areAllStr = countries.every((name) => typeof name === "string"); // ¿Son todas strings?
console.log("Usando Every para chequear si en el array son todos strings.", areAllStr);

// find: Retorna el primer elemento que cumple la condición
const ages = [24, 22, 25, 17, 35, 18];
let age = ages.find((age) => age < 20);
console.log(`usando Find para encontrar el primer valor que cumple con la condicion\nPrimer edad que sea menor a 20`, ages, "\n", age);

// findIndex: Retorna la posición del primer elemento que cumple la condición

age = ages.findIndex((age) => age < 20)
console.log(`findIndex nos da como resultado el indice del valor que buscamos, por ej ages.findIndex((age) => age < 20) esto daria como resultado que el indice de ese valor es: ${age}`);


// some: Comprueba si algunos de los elementos son similares en un aspecto. Retorna un booleano
const bools = [true, true, true, true];
const areSomeTrue = bools.some((b) => b === true);
console.log(areSomeTrue);

// sort: El método "sort" ordena los elementos del array de forma ascendente o descendente. Por defecto, el método sort() ordena los valores como strings. Esto funciona bien para los elementos del array de strings pero no para los números. Si los valores numéricos se ordenan como strings y nos da un resultado erróneo. El método de Sort modifica el array original. Se recomienda copiar los datos originales antes de empezar a utilizar el método sort.

const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
// let aux = products.slice(); copia simple,
const copyProducts = JSON.parse(JSON.stringify(products)); //copia profunda de array
console.log(products, "productos ordenados:", copyProducts.sort());


const numb = [9.81, 3.14, 100, 37];
// El uso del método sort para ordenar los elementos numéricos proporciona un resultado erróneo.
console.log(numb.sort()); //[100, 3.14, 37, 9.81]
numb.sort((a, b) => a - b); // reducido a funcion flecha.
console.log("Ascendente, numb.sort((a, b) => a - b)", numb); // [3.14, 9.81, 37, 100]
numb.sort((a, b) => b - a);
console.log("Descendente, numb.sort((a, b) => b - a)", numb); //[100, 37, 9.81, 3.14]


//ordenar objetos
const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 10 },
  { name: "Elias", age: 22 },
  { name: "Pablo", age: 36 },
];
let copyUsers = JSON.parse(JSON.stringify(users))
copyUsers.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log("Ordenar usuarios con SORT (objetos) menor a mayor:\n", users, copyUsers);
copyUsers.sort((a, b) => {
  if (a.age > b.age) return -1;
  if (a.age < b.age) return 1;
  return 0;
});
console.log("Ordenar usuarios con SORT (objetos) mayor a menor:\n", users, copyUsers);


// Ejercicios: Nivel 1
console.log(`\n\n\n\n`);
console.log(`\n\nEjercicios: Nivel 1:\n\n`);

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products1 = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: "no seteado" },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "no seteado" },
];

// Explique la diferencia entre forEach, map, filter, and reduce.
// forEach recorre el array y por cada uno de los elementos retorna su valor. map ejecuta una funcion callback y a cada valor lo pasa por la funcion guradando el valor en un nuevo array. filter chequea que la condicion se cumpla, y si se cumple, lo guarda en un nuevo array, reduce toma una funccion callback con un acumulador y va sumando a ese acumulador los resultados de la funcion que ponemos, asi con todos los valores del array.

// Defina una función callback antes de utilizarla en forEach, map, filter o reduce.
// es una funcion que puede ser pasada como parametro.
console.log(countries, names, numbers1, products1, "\n\n");
console.log(`Utiliza forEach para mostrar con console.log cada país del array de países.`);
countries.forEach((country) => console.log(country));

console.log(`Utiliza forEach para mostrar con console.log cada nombre del array de nombres.`);
names.forEach((name) => console.log(name));

console.log(`Utiliza forEach para mostrar con console.log cada número del array de números.`);
numbers1.forEach((num) => console.log(num));

console.log(`Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.`);
let copyCountries = countries.map((item) => item.toUpperCase());
console.log(countries, copyCountries);

console.log(` Utilice map para crear un array de longitudes de países a partir del array de países.`);
let countriesLetters = countries.map((item) => item.length);
console.log(countries, countriesLetters);

console.log(`Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.`);
let copyNumbers = numbers1.map((item) => item * item);
console.log(numbers1, copyNumbers);

console.log(`Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.`);
let copyNames = names.map((name) => name.toLocaleUpperCase());
console.log(names, copyNames);

console.log(` Utilice filter para filtrar los países que contienen land.`);
let countriesFilterLand = countries.filter((item) => item.includes("land"));
console.log(countriesFilterLand);

console.log(`Utilice filter para filtrar los países que tienen siete caracteres.`);
let countriesSevenLetters = countries.filter((item) => item.length == 7);
console.log(countriesSevenLetters);

console.log(`Utilice filter para filtrar los países que contengan seis letras o más en el array de países.`);
let countriesMoreThanSix = countries.filter((item) => item.length > 5);
console.log(countriesMoreThanSix);

console.log(`Utilice filter para filtrar los países que empiezan por "A"`);
let countriesA = countries.filter((item) => item.startsWith("A"));
console.log(countriesA);

console.log(`Utilice filter para filtrar sólo los precios con valores.`);
let price = products1.filter((item) => typeof item.price === "number");
console.log(products1, price);

console.log(`Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string. getStringLists(arr) aca en caso de usar otro array seria solamente item === "string" en vez de item.price porque estoy tomando el array de objetos.∫`);
function getStringLists(arr) {
  return arr.filter((item) => typeof item.price === "string");
}
console.log(getStringLists(products1));

console.log(`Usa reduce para sumar todos los números del array de números.`);
let numReduce = numbers1.reduce((acumulador, current) => acumulador + current, 0);
console.log(numReduce);
// Utiliza reduce para concatenar todos los países y producir esta frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa
// Explique la diferencia entre some y every
// Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.
// Utilice every para comprobar si todos los países contienen la palabra land.
// Explique la diferencia entre find y findIndex.
// Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países.
// Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países.
// Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1.
// Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1.

// Ejercicios: Nivel 2
console.log(`\n\nEjercicios: Nivel 2:\n\n`);
// Encuentre el precio total de los productos encadenando dos o más iteradores de matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).
// Encuentre la suma del precio de los productos usando sólo reduce(callback)).
// Declara una función llamada categorizeCountries que retorna un array de países que tienen algún patrón común (encuentras el array de países en este repositorio como countries.js(ej 'land', 'ia', 'island','stan')).
// Cree una función que retorne un array de objetos, que es la letra y el número de veces que la letra usa para empezar el nombre de un país.
// Declara una función getFirstTenCountries y retorna un array de diez países. Utiliza diferente programación funcional para trabajar en el array countries.js.
// Declara una función getLastTenCountries que devuelve los últimos diez países del array de países.
// Encuentre qué letra se utiliza muchas veces como inicial de un nombre de país del array de países (ej. Finland, Fiji, France etc)

// Ejercicios: Nivel 3
console.log(`\n\nEjercicios: Nivel 3:\n\n`);
// Utiliza la información de los países, en la carpeta de datos. Ordena los países por nombre, por capital, por población

// *** Encuentre las 10 lenguas más habladas:

// // El resultado debería ser el siguiente
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// // El resultado debería ser el siguiente
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```
// *** Utilice el archivo countries_data.js para crear una función que cree los diez países más poblados.

// console.log(mostPopulatedCountries(countries, 10))

// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]
// ```
// *** Intenta desarrollar un programa que calcule la medida de tendencia central de una muestra(mean, median, mode) y medida de la variabilidad(range, variance, standard deviation). Además de esas medidas, encuentre el mínimo, el máximo, el recuento, el porcentaje y la distribución de frecuencias de la muestra. Puede crear un objeto llamado estadísticas y crear todas las funciones que hacen cálculos estadísticos como método para el objeto estadísticas. Comprueba el resultado que aparece a continuación.

// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// 🎉 ¡FELICITACIONES! 🎉