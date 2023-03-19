"use strict";
// Valores verdaderos
// Todos los números (positivos y negativos) son verdaderos excepto cero
// Todos las string (cadenas) son verdaderos excepto un string vacío ('')
// El booleano true

// Valores falsos
// 0
// 0n
// null
// undefined
// NaN
// El booleano false
// '', "", ``, string vacío

// let numOne = 4;
// let numTwo = 3;
// let sum = numOne + numTwo;
// let diff = numOne - numTwo;
// let mult = numOne * numTwo;
// let div = numOne / numTwo;
// let remainder = numOne % numTwo;
// let powerOf = numOne ** numTwo;

// console.log(sum, diff, mult, div, remainder, powerOf); // 7,1,12,1.33,1, 64

// console.log(3 > 2); // true, porque 3 es mayor que 2
// console.log(3 >= 2); // true, porque 3 es mayor que 2
// console.log(3 < 2); // false,  porque 3 es mayor que 2
// console.log(2 < 3); // true, porque 2 es menor que 3
// console.log(2 <= 3); // true, porque 2 es menor que 3
// console.log(3 == 2); // false, porque 3 no es igual a 2
// console.log(3 != 2); // true, porque 3 no es igual a 2
// console.log(3 == "3"); // true, compara solamente el valor
// console.log(3 === "3"); // false, compara tanto el valor como el tipo de dato
// console.log(3 !== "3"); // true, compara tanto el valor como el tipo de dato
// console.log(3 != 3); // false, compara solo valor
// console.log(3 !== 3); // false, compara tanto el valor como el tipo de dato
// console.log(0 == false); // true, equivalente
// console.log(0 === false); // false, No exactamente igual
// console.log(0 == ""); // true, equivalente
// console.log(0 == " "); // true, equivalente
// console.log(0 === ""); // false, No exactamente igual
// console.log(1 == true); // true, equivalente
// console.log(1 === true); // false, No exactamente igual
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log(NaN == NaN); // false, diferente (not a number)
// console.log(NaN === NaN); // false
// console.log(typeof NaN); // tipo número

// console.log("mango".length == "avocado".length); // false
// console.log("mango".length != "avocado".length); // true
// console.log("mango".length < "avocado".length); // true
// console.log("milk".length == "meat".length); // true
// console.log("milk".length != "meat".length); // false
// console.log("tomato".length == "potato".length); // true
// console.log("python".length > "dragon".length); // false

// // && ejemplo de operador ampersand

// let check = 4 > 3 && 10 > 5; // true && true -> true
// check = 4 > 3 && 10 < 5; // true && false -> false
// check = 4 < 3 && 10 < 5; // false && false -> false

// // || ejemplo de operador pipe

// check = 4 > 3 || 10 > 5; // true  || true -> true
// check = 4 > 3 || 10 < 5; // true  || false -> true
// check = 4 < 3 || 10 < 5; // false || false -> false

// //! ejemplos de negación

// check = 4 > 3; // true
// check = !(4 > 3); //  false
// let isLightOn = true;
// let isLightOff = !isLightOn; // false
// let isMarried = !false; // true

// //Pre-incremento
// let count = 0;
// console.log(++count); // 1
// console.log(count); // 1
// //Post-incremento
// count = 0;
// console.log(count++); // 0
// console.log(count); // 1
// //Usamos la mayor parte del tiempo post-incremento. Pero debes recordar cómo usar el operador de incremento posterior.

// let isRaining = true;
// isRaining
//     ? console.log("Necesitas un impermeable.")
//     : console.log("No necesitas un impermeable.");
// isRaining = false;
// isRaining
//     ? console.log("Necesitas un impermeable.")
//     : console.log("No necesitas un impermeable.");

// let isMember = true;
// let is = isMember;
// console.log(`Usted ${is ? "es" : "no es"} miembro, La Cuota es de:(${isMember ? "$2.00" : "$10.00"})`);
// isMember = false;
// is = isMember;
// console.log(`Usted ${is ? "es" : "no es"} miembro, La Cuota es de:(${isMember ? "$2.00" : "$10.00"})`); // super util para ahorrar codigo

// //let number = prompt("Ingrese un número mayor que 10", ">10");
// // console.log(`prompt(${number})`);


const now = new Date();
// console.log(now);
// console.log(now.getFullYear()); // 2020
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay()); // 6, porque el día es sábado que es el día 7. El domingo es 0, el lunes es 1 y el sábado es 6. Obtener el día de la semana como un número (0-6)
// console.log(now.getHours()); // 0, porque el tiempo es 00:56:41
// console.log(now.getMinutes()); // 56, porque el tiempo es 00:56:41
// console.log(now.getSeconds()); // 41, porque el tiempo es 00:56:41
// console.log(now.getTime());
// let allSeconds = Date.now(); //
// console.log(allSeconds);

// const year = now.getFullYear(); // return años
// const month = now.getMonth() + 1; // return meses(0 - 11)
// const date = now.getDate(); // return días (1 - 31)
// const hours = now.getHours(); // return horas (0 - 23)
// const minutes = now.getMinutes(); // return minutos (0 -59)
// console.log(`Dia, mes, año, hora: ${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56




// Ejercicios: Nivel 1
console.log(`\n\nEjercicios: Nivel 1:\n\n`);
// Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
let firstName = "Pablo";
console.log(typeof (firstName));
let lastName = "Copes";
console.log(typeof (lastName));
let country = "Argentina";
console.log(typeof (country));
let city = "Tandil";
console.log(typeof (city));
let age = 36;
console.log(typeof (age));
let isMarried = false;
console.log(typeof (isMarried));
let year = 2023;
console.log(typeof (year));

// Verifique cualquier valor booleano true o false.
let t = true;
let f = false;

if (t) {
    if (t == f) {
        console.log(`el valor es true`)
    }
    else {
        console.log("el valor es false");
    }
}

// Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
let first = 1
let second = true;
let third = "hola"

// Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
let fourth = undefined;
let fifth = NaN;
let sixth = null;
// Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

// 4 > 3 true
// 4 >= 3 false
// 4 < 3 false
// 4 <= 3 false
// 4 == 4 true
// 4 === 4 true
// 4 != 4 false
// 4 !== 4 false
// 4 != '4' true
// 4 == '4' true
// 4 === '4' false

// Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
let python = "Python";
let jargon = "Jargon";
let result = python.length != jargon.length;
console.log(result);
// Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

// 4 > 3 && 10 < 12 True
// 4 > 3 && 10 > 12 False
// 4 > 3 || 10 < 12 True
// 4 > 3 || 10 > 12 True
// !(4 > 3) False
// !(4 < 3) True
// !(false) True
// !(4 > 3 && 10 < 12) False
// !(4 > 3 && 10 > 12) True
// !(4 === '4') True
// No hay 'on' tanto en dragon como en python False

// Utilice el objeto Date para realizar las siguientes actividades

// ¿Qué año es hoy?
console.log(`Que año es hoy? ${now.getFullYear()}`);
// ¿Qué mes es hoy con un número?
console.log(`Que mes es hoy? ${now.getMonth()}`);
// ¿Qué fecha es hoy?
console.log(`Que fecha es hoy? ${now.getDate()}`);
// ¿Qué día es hoy con un número?
console.log(`Que día es hoy? ${now.getDay}`);
// ¿Cuál es la hora actual?
console.log(`cual es la hs actual? ${now.getHours()}`);
// ¿Cuántos minutos hay actualmente?
console.log(`Cual es el minuto actual? ${now.getMinutes()} `);
// Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
let time = Math.round(now.getTime() / 100)
console.log(`Cuantos segundos transcurrieron desde el 01/01/1970 al segundo actual? ${time}`);

console.log(`\n\nEjercicios: Nivel 2:\n\n`);
// Ejercicios: Nivel 2
// Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

function triangleBase() {
    //let base = +prompt("Ingrese un numero para la base.");
    //let height = +prompt("Ingrese un numero para la altura.");
    let base = 20;  //borrar / es para evitar prompt
    let high = 10;  //borrar / es para evitar prompt
    let result = (base * high) / 2;
    return result;
}
let tester = triangleBase();
console.log(`el area de este triangulo es de ${tester}`);

// Ingrese base: 20
// Ingrese altura: 10
// El área del triángulo es: 100

// Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
function trianglePerimeter() {
    //let a = +prompt("Ingrese un numero para el lado A");
    //let b = +prompt("Ingrese un numero para el lado B");
    //let c = +prompt("Ingrese un numero para el lado c");
    let d = 5;
    let e = 4;
    let f = 3;
    return d + e + f;
    //let result = a+b+c;
    //return result;
}

tester = trianglePerimeter();
console.log(`el perimetro del triangulo que ingreso es: ${tester}`);
// Ingrese lado a: 5
// Ingrese lado b: 4
// Ingrese lado c: 3
// El perimetro del triangulo es: 12

// Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))

function rectangle() {
    //let high = +prompt("Ingrese un numero para el alto.")
    //let width = +prompt("Ingrese un numero para el ancho.")
    let high = 11;
    let width = 66;
    let area = high * width;
    let perimeter = (high + width) * 2;
    let result = { 'alto': high, 'ancho': width, 'area': area, 'perimetro': perimeter };

    return result;
}
tester = rectangle();
console.log(`Rectangulo | alto: ${tester.alto} | ancho: ${tester.ancho}\nArea: ${tester.area}\nPerimetro: ${tester.perimetro}`);

// Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
function circleAC() {
    //let radius = +prompt("Ingrese un numero para el radio del circulo.");
    let radius = 5;
    let area = Math.PI * Math.pow(radius, 2);
    let circumference = (Math.PI * radius) * 2;
    let result = [radius, area.toFixed(2), circumference.toFixed(2)];
    return result;
}
tester = circleAC();
console.log(`Radio: ${tester[0]}\nArea: ${tester[1]}\nCircunferencia: ${tester[2]}`);

// Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
// puntos (0,-2)(2,2)
tester = slope(0, -2, 2, 2)
console.log(`la pendiente entre el punto (0,-2) y (2,2) es ${tester[2]}, ${tester[0]}/${tester[1]}`);
// La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)


function slope(x1, y1, x2, y2) {
    let num = (y2 - y1)
    let den = (x2 - x1)
    let m;
    if (num / den > 0) {
        m = "creciente";
    }
    else {
        m = "decreciente";
    }
    let result = [num, den, m]
    return result
}
tester = slope(2, 2, 6, 10)
console.log(`la pendiente entre el punto (2,2) y (6,10) es ${tester[2]}, ${tester[0]}/${tester[1]}`);


// Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.
function valorY(x) {
    let y = x * 2 + 6 * x + 9;
    return y;
}
console.log(`x = 0 | y = ${valorY(0)}`);
console.log(`x = 1 | y = ${valorY(1)}`);
console.log(`x = 2 | y = ${valorY(2)}`);
console.log(`x = 4 | y = ${valorY(4)}`);
console.log(`x = -9/8 | y = ${valorY(-9 / 8)}`);

// Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
function salaryWMY() {
    //let hour = +prompt("Ingrese cantidad de horas trabajadas por día.");
    //let fare = +prompt("Ingrese la tarifa por hora.");
    let hour = 8
    let fare = 28
    let day = Math.trunc(hour * fare);
    let week = Math.trunc(day * 5);
    let month = Math.trunc(week * 4.34524);
    let year = Math.trunc(month * 12);
    let result = [hour, fare, day, week, month, year];
    return result;
}
let salary = salaryWMY();
console.log(`Horas: ${salary[0]}\nTarifa: $${salary[1]}\nSueldo por día: $${salary[2]}\nSueldo por semana: $${salary[3]}\nSueldo por mes: $${salary[4]}\nSueldo por año: $${salary[5]}`);

// Ingrese horas: 40
// Introduce la tarifa por hora: 28
// Su ganancia semanal es 1120

// Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
function nameLong() {
    let name = prompt("ingrese su nombre");
    name.length > 7 ? console.log(`Su nombre es largo`) : console.log(`Su nombre es corto`);
}
// nameLong();
//primer if ternario que uso y sale bien !!!!! GRANDE PA!

// Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
function nameAndLastName() {
    let name = prompt("Ingrese su nombre");
    let lastName = prompt("Ingrese su apellido")
    if (name.length == lastName.length) {
        console.log(`Su nombre '${name}' tiene la misma cantidad de letras que su apellido '${lastName}'`);
    }
    else {
        name.length > lastName.length ? console.log(`Su nombre '${name}' es mas largo que su apellido '${lastName}'`) : console.log(`Su apellido '${lastName}' es mas largo que su nombre '${name}'`);
    }
}
//nameAndLastName();
// let firstName = "Asabeneh";
// let lastName = "Yetayeh";
// Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.

// Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.
function canDrive() {
    const LEGAL_AGE = 18;
    age = +prompt("Ingrese su edad.");
    age >= LEGAL_AGE ? console.log(`Usted puede conducir.`) : console.log(`Usted es menor, debe esperar ${LEGAL_AGE - age} años`);
}
// canDrive();

// Introduzca el año de nacimiento: 1995
// Tienes 25 años. Tienes la edad suficiente para conducir.
function canDriveYear() {
    const LEGAL_AGE = 25;
    let now = new Date();
    const YEAR = +now.getFullYear();
    let birthYear = +prompt("Ingrese su año de nacimiento.");
    age = YEAR - birthYear;
    age >= LEGAL_AGE ? console.log(`Tienes ${age}, puedes manejar`) : console.log(`Usted es menor, debe esperar ${LEGAL_AGE - age} años`);
}
// canDriveYear();

console.log(`\n\nEjercicios: Nivel 3:\n\n`);
// Ejercicios: Nivel 3
// Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
function actualHour() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    console.log(`${hours} horas, ${minutes} minutos y ${seconds} segundos`);
}
actualHour();