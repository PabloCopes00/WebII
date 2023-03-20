"use strict"
// 💻 Ejercicios
// Ejercicios: Nivel 1
console.log(`\n\nEjercicios: Nivel 1:\n\n`);

// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];
// Declara un array vacío.
let arr = [];
// Declara un array com mas de 5 elementos.
for (let i = 0; i < 5; i++) {
    arr.push(i);
}
console.log("arreglo 'arr': ", arr);
//podria declaralo haciendo let arr1 = [0,1,2,3,4]; pero practicamos el .push

// Encuentra la longitud de tu array.
console.log("tamaño arrego 'arr': ", arr.length)
// Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
let media = Math.floor(arr.length / 2);
console.log(`el primer elemento del arreglo es ${arr[0]}, el del medio es ${media} y el ultimo es ${arr.length - 1}`);
// Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
let mixedDataTypes = ["pablo", 5, 36, "Maria", true, 99.9, [1, 2, 3], "fuck"];
console.log("longitud del array: ", mixedDataTypes.length);
// Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// Imprima el array usando console.log().
console.log(`imprimimos el array: `, itCompanies);
// Imprima el número de empresas en el array.
console.log(`cuantas empresas hay?: `, itCompanies.length);
// Imprime la primer empresa , la intermedia y la última empresa
media = Math.floor(itCompanies.length / 2);
itCompanies.length % 2 == 0 ? media-- : media;
let lastIndex = itCompanies.length - 1;
console.log(`la primer empresa es '${itCompanies[0]}', la empresa del medio es '${itCompanies[media]}', y la ultima es '${itCompanies[lastIndex]}'`);
// Imprime cada empresa.
for (let i = 0; i < itCompanies.length; i++) {
    console.log(`Empresa ${i + 1}: ${itCompanies[i]}`);
}
// Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
console.log(`Ahora en mayusculas.`);
for (let i = 0; i < itCompanies.length; i++) {
    console.log(`Empresa ${i + 1}: ${itCompanies[i].toUpperCase()}`);
}
// Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
console.log(`${itCompanies.join(", ")} son grandes empresas de IT`);
// Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
function empresa() {
    let emp = prompt("Ingrese nombre de empresa para chequear si esta en el array").toLowerCase();
    let e = emp[0].toUpperCase() + emp.substring(1);
    itCompanies.includes(e) ? console.log(`${e} es la empresa nro ${itCompanies.indexOf(e) + 1}`) : console.log(`La compañia '${e}' no se encuentra en el array.`);
}
// Filtre las empresas que tienen más de una 'o' sin el método filter()
/**Ingresar un array y una letra, (array, letter) */
function letterFilter() {
    for (let i = 0; i < itCompanies.length; i++) {
        let check = itCompanies[i].match(/o/gi);
        check != null ? check = +check.length : check = 0;
        check > 1 ? console.log(`${itCompanies[i]}, tiene ${check} letras 'o'`) : console.log(`${itCompanies[i]} no contiene mas de 2 letra 'o'`);
        // let quant = +check.match(/o/gi).length;
        //  quant > 1 ? console.log(`${itCompanies[i]} ${itCompanies[i]} tiene ${quant} letras 'o'.`) : console.log(`${itCompanies[i]} no tiene 2 o más '${letter}' en su nombre`);
    }
}
letterFilter();

// Ordene el array usando el método sort()
console.log("Array sin ordenar:", itCompanies);
console.log("Array ordenado", itCompanies.sort());
// Invierte la array usando el método reverse()
// console.log(`Array reverso`, itCompanies.reverse());
// Cortar las primeras 3 empresas del array
console.log(`Array sin las primeras 3 empresas`, itCompanies.slice(3, itCompanies.length));
// Cortar las últimas 3 empresas del array
console.log(`Array sin las ultimas 3 empresas `, itCompanies.slice(0, itCompanies.length - 3));
// Cortar la empresa o empresas intermedias de TI del array
function cortarEmpresaMedia() {
    let middle = 0;
    console.log(`el arreglo es este: ${itCompanies}`);
    middle = itCompanies.length;
    middle % 2 == 0 ? middle = Math.floor((middle - 1) / 2) : middle = Math.floor(middle / 2);
    const arr1 = itCompanies.slice(0, middle);
    const arr2 = itCompanies.slice(middle + 1);
    const arr3 = arr1.concat(arr2);
    console.log(`el arreglo sin el del medio es este: ${arr3}`);
}
cortarEmpresaMedia();
// Eliminar la primera empresa de TI del array
let check = itCompanies;
console.log("sin el primero? ", check.slice(1));
// Eliminar la empresa o empresas intermedias de TI del array
function cortarEmpresaMediaPar() {
    //itCompanies.push("Empresa_Prueba");
    let middle = 0;
    console.log(`el arreglo es este: ${itCompanies}`);
    middle = itCompanies.length / 2;
    if (middle % 2 == 0) {
        let company1 = middle - 1;
        let company2 = middle;
        let arr1 = itCompanies.slice(0, company1);
        let arr2 = itCompanies.slice(company2 + 1);
        let arr3 = arr1.concat(arr2);
        console.log(`Sin las empresas '${itCompanies[company1]}' y '${itCompanies[company2]}' del medio: ${arr3}`);
    } else {
        middle = Math.floor(middle);
        let arr1 = itCompanies.slice(0, middle);
        let arr2 = itCompanies.slice(middle + 1);
        let arr3 = arr1.concat(arr2);
        console.log(`Sin la empresa '${itCompanies[middle]}' del medio es este: ${arr3}`);
    }

}
// cortarEmpresaMediaPar();
// Elimine la última empresa de TI del array
console.log(`\nArray: `, itCompanies);
console.log(`Array sin el ultimo.`, itCompanies.splice(0, itCompanies.length - 1));
// Eliminar todas las empresas de TI
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(`\nArray: `, itCompanies);
console.log(`Array: vacio `, itCompanies.splice());

// Ejercicios: Nivel 2
console.log(`\n\nEjercicios: Nivel 2:\n\n`);
// Cree un archivo de countries.js separado y almacene el array de países en este archivo, cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo. Acceda a ambos archivos en el archivo main.js

// Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array

// let text =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// console.log(words);
// console.log(words.length);
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13
// En el siguiente carrito de compras agregue, elimine, edite artículos

// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
// Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
// Elimine 'Honey' si es alérgico a la miel (honey)
// Modificar Tea a 'Green Tea'
// En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.

// En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.

// Concatene las siguientes dos variables y guardelas en una variable fullStack.

// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// const backEnd = ["Node", "Express", "MongoDB"];

// console.log(fullStack);
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// Ejercicios: Nivel 3
console.log(`\n\nEjercicios: Nivel 3:\n\n`);

// El siguiente es un array de 10 edades de estudiantes:

// ```js
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ```

// - Ordene el array y encuentre la edad mínima y máxima
// - Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
// - Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
// - Encuentre el rango de las edades (max menos min)
// - Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
// 1.Cortar los diez primeros países de la array de países

// Encuentre el país o países de en medio en el array de países

// Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.

// 🎉 ¡Felicitaciones! 🎉