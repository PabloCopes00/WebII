"use strict";
// varios de estos ejercicios fueron puestos en practica durante los pasados practicos porque funciones ya era algo a lo que estaba acostumbrado, asique solo resolveremos los que son mas dificiles.

// Ejercicios: Nivel 1
console.log(`\n\nEjercicios: Nivel 1:\n\n`);
// Declare una función fullName e imprima su nombre completo.

// Declare una función fullName y ahora toma firstName, lastName como parámetro y retorna su nombre completo.

// Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.

// El área de un rectángulo se calcula de la siguiente manera: area = length x width. Escribe una función areaOfRectangle que calcule el área de un rectángulo.

// El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo.

// El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height. Escribe una función volumeOfRectPrism que calcule el volumen de un prisma.

// El área de un círculo se calcula de la siguiente manera: area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo.

// La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr. Escribe una función circumOfCircle que calcule la circunferencia de un círculo.

// La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume. Escribe una función density que calcule la densidad de una sustancia.

// La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, speed.

// El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia.

// La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
function convertCelsiusToFahrenheit() {
    // let celsius = prompt("ingrese los grados Celsius que desea transformar");
    let celsius = 30;
    return (celsius * (9 / 5)) + 32;
}
let test = convertCelsiusToFahrenheit();
console.log("sus grados Farenheit son: ", test);

// El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.

// Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
// Peso bajo: IMC inferior a 18,5
// Peso normal: IMC de 18,5 a 24,9
// Sobrepeso: IMC de 25 a 29,9
// Obeso: IMC es 30 o más
// Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.

// Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.

// console.log(findMax(0, 10, 5));
// 10;
// console.log(findMax(0, -10, -2));
// 0;
// Ejercicios: Nivel 2
console.log(`\n\nEjercicios: Nivel 2:\n\n`);
// La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.

// La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.

// console.log(solveQuadratic()); // {0}
// console.log(solveQuadratic(1, 4, 4)); // {-2}
// console.log(solveQuadratic(1, -1, -2)); // {2, -1}
// console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)); //{2, -2}
// console.log(solveQuadratic(1, -1, 0)); //{1, 0}
// Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array.

// Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.

// showDateTime()
// 08/01/2020 04:08
// Declare una función llamada swapValues. Esta función intercambia el valor de x a y.

// swapValues(3, 4); // x => 4, y=>3
// swapValues(4, 5); // x = 5, y = 4
// Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).

// console.log(reverseArray([1, 2, 3, 4, 5]));
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(["A", "B", "C"]));
// //['C', 'B', 'A']
// Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray.

// Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento.

// Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.

// Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.

// Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango.

// Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango.

// Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.

// evensAndOdds(100);
// El número de impares son 50.
// El número de pares es 51.
// Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos

// sum(1, 2, 3); // -> 6
// sum(1, 2, 3, 4); // -> 10
// Escriba una función randomUserIp que genere una ip de usuario aleatoria.

// Escriba una función randomMacAddress que genere una dirección mac aleatoria.
function randomMacAddress() {
    let randomMac = "ABCDEF1234567890";
    let mac = "";
    for (let i = 1; i < 13; i++) {
        mac += randomMac.charAt(Math.random() * randomMac.length);
        i % 2 == 0 && i < 12 ? mac += ":" : null;

    }
    return mac;
}
let mac = randomMacAddress();
console.log(`esta es su direccion MAC random: ${mac}`);

// Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.

// console.log(randomHexaNumberGenerator());
// '#ee33df'
// Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.

// console.log(userIdGenerator());
// 41XTDbE
// Ejercicios: Nivel 3
console.log(`\n\nEjercicios: Nivel 3:\n\n`);
// Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
// Escriba una función llamada rgbColorGenerator que genera colores rgb

// rgbColorGenerator()
// rgb(125,244,255)
// Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array.

// Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array.

// Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb.

// Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa.

// Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb.

// console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors("hexa", 1)); // '#b334ef'
// console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
// Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada

// Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número.

// Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.

// Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma.

// Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.

// Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.

// Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
// Escribe una función llamada isPrime, que verifica si un número es un número primo.

// Escriba una función que verifique si todos los elementos son únicos en un array.

// Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.
function verifyArray(arr) {
    let verify;
    let i = 0;
    while (i < arr.length - 1) {
        typeof arr[i] == typeof arr[i + 1] ? verify = true : verify = false;
        i++;
    }
    if (verify) {
        console.log(`El array que ingreso es del mismo tipo`);
    } else {
        console.log(`El array que ingreso tiene diferentes tipos de dato.`);
    }
}
let arr1 = [1, 2, 4, 7, 8, 24, 7654, 432];
let arr2 = [1, 5, 8, "Hola", true];
console.log(`verifyArray(arr)`);
console.log(verifyArray(arr1), arr1);
console.log(verifyArray(arr2), arr2);

// El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto $ o _. Escriba una función isValidVariable que verifique si una variable es válida o inválida.

// Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.

// sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)];
// Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido