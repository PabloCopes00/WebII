"use strict";



// Ejercicios: Nivel 1
console.log(`\n\nEjercicios: Nivel 1:\n\n`);

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const products = [
//   { product: "banana", price: 3 },
//   { product: "mango", price: 6 },
//   { product: "potato", price: " " },
//   { product: "avocado", price: 8 },
//   { product: "coffee", price: 10 },
//   { product: "tea", price: "" },
// ];
// Explique la diferencia entre forEach, map, filter, and reduce.
// Defina una función callback antes de utilizarla en forEach, map, filter o reduce.
// Utiliza forEach para mostrar con console.log cada país del array de países.
// Utiliza forEach para mostrar con console.log cada nombre del array de nombres.
// Utiliza forEach para mostrar con console.log cada número del array de números.
// Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
// Utilice map para crear un array de longitudes de países a partir del array de países.
// Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.
// Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.
// Utilice map para asignar el array de productos a sus correspondientes precios.
// Utilice filter para filtrar los países que contienen land.
// Utilice filter para filtrar los países que tienen seis caracteres.
// Utilice filter para filtrar los países que contengan seis letras o más en el array de países.
// Utilice filter para filtrar los países que empiezan por "E";
// Utilice filter para filtrar sólo los precios con valores.
// Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.
// Usa reduce para sumar todos los números del array de números.
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
console.log(`\n\nEjercicios: Nivel 1:\n\n`);
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