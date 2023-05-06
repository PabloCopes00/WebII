"Use strict";
const languages = [
    "English",
    "Finnish",
    "English",
    "French",
    "Spanish",
    "English",
    "French",
];
const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

for (const language of setOfLanguages) {
    console.log(language);
}

const companies = new Set(); // crear set vacío
console.log(companies.size); // 0

companies.add("Google"); // añadir un elemento a set
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Apple");
console.log(companies.size); // 5 elements in set
console.log(companies);

const setOfCompanies = new Set();
for (const company of companies) {
    setOfCompanies.add(company);
}
console.log("Compañias agregadas desde un bucle", setOfCompanies);

console.log(companies.delete("Google"));
console.log(companies.size); // 4 elementos en set
console.log(companies.has("Microsoft")); // false
console.log(companies.has("Apple")); // true
// companies.clear(); //limpiar el set.
// console.log(companies);

//ej para contar cuantas veces se repite un mismo lenguaje dentro de un mismo array.
const langSet = new Set(languages);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size); // 4

const counts = [];

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l);
    console.log(filteredLang); // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

// Otros casos de uso de set. Por ejemplo, para contar elementos únicos en un array.

const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);

console.log(setOfNumbers);
console.log(`\n\n\n`);
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];
console.log("A", a, "B", b);

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log("Elementos únicos en un array.", C);

a = [1, 2, 3, 4, 5];
b = [3, 4, 5, 6];
c = a.filter((num) => B.has(num));

A = new Set(a);
B = new Set(b);
C = new Set(c);

console.log("Chequear los numeros de A que estan en B", C);


// Diferencia de sets
// Para encontrar la diferencia entre dos sets se puede utilizar un filtro.Vamos a encontrar la diferencia del set A y el set B(A \ B)

a = [1, 2, 3, 4, 5];
b = [3, 4, 5, 6];
c = a.filter((num) => !B.has(num));

A = new Set(a);
B = new Set(b);
C = new Set(c);
console.log("Numeros de A que no estan en B", C);

// Map
// Creación de un Map vacío
let map = new Map();
console.log(map);

// Creación de un Map a partir de un array
let countriesCap = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];
let countriesMap = new Map(countriesCap);
console.log("map countries", countriesMap);
console.log("map size", countriesMap.size);

// Añadir valores a Map

countriesMap.set("Argentina", "Buenos Aires");
countriesMap.set("Republica Dominicana", "Santo Domingo");
console.log("Map con items nuevos agregados.", countriesMap);
console.log("map size", countriesMap.size);
console.log(countriesMap.get("Argentina"));

for (const country of countriesMap) {
    console.log("country", country);
}

for (const [country, city] of countriesMap) {
    console.log("country, city", country, city);
}

// Ejercicios: Nivel 1
console.log(`\n\nEjercicios: Nivel 1:\n\n`);
a = [4, 5, 8, 9];
b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

console.log(`crear un set vacío`);
let newSet = new Set();
console.log(newSet);

console.log(`Crear un set que contenga de 0 a 10 utilizando bucle`);
for (let i = 1; i < 11; i++) {
    newSet.add(i);
}
console.log(newSet);

console.log(`Eliminar un elemento de set`);
newSet.delete(8);
console.log("Comando: newSet.delete(8)\n", newSet);
console.log(`Limpia set`);
newSet.clear();
console.log(newSet);

console.log(`Crear un set de 5 elementos string a partir de un array`);
const codeLanguages = ["JavaScript", "C#", "GO", "R", "Swift"];
const codeSet = new Set(codeLanguages);
console.log(codeSet);

console.log(`Crear un map de países y el número de caracteres de un país`);
const countriesMap1 = new Map();
for (const country of countriesMap) {
    countriesMap1.set(country[0], country[0].length)
}
console.log(countriesMap1);


// Ejercicios: Nivel 2
console.log(`\n\nEjercicios: Nivel 2:\n\n`);

// console.log(`Encontrar a unión b`);

// console.log(`Encontrar a intersección b`);

// console.log(`Encontrar a con b`);

// Ejercicios: Nivel 3
//console.log(`\n\nEjercicios: Nivel 3:\n\n`);

// console.log(`Cuántos idiomas hay en el archivo de objetos de países.`);

// console.log(`Utiliza los datos de los países para encontrar las 10 lenguas más habladas:`);
