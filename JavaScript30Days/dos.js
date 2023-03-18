"use strict";
/**    aca arranca el comentario


//manipular cadenas de texto.
let string = "JavaScript";

let firstLetter = string[0];
console.log(firstLetter); // J

let secondLetter = string[1]; // a
let thirdLetter = string[2]; //v

let lastLetter = string[9];
console.log(lastLetter); // t

let lastIndex = string.length - 1; // asi como 0 da el inicio, -1 da el final.
console.log(lastIndex); // 9
console.log(string[lastIndex]); // t

console.log("\ntoUpperCase() todo en mayuscula")
console.log(string.toUpperCase()); // JAVASCRIPT
let firstName = "Pablo";
console.log(firstName.toUpperCase()); // PABLO
let country = "Argentina";
console.log(country.toUpperCase()); // ARGENTINA

console.log("\ntoLowerCase() todo en mainuscula")
//todo en minuscula
console.log(string.toLowerCase()); // javascript
console.log(firstName.toLowerCase()); // pablo
console.log(country.toLowerCase()); // copes

console.log("\nsubstr() Se necesitan dos argumentos, el índice inicial y el número de caracteres para dividir.")
console.log(string.substr(4, 6)); // Script
console.log(country.substr(3, 4)); // enti (argENTIna)

console.log("\nsubstring() Toma dos argumentos, el índice inicial y el índice final, pero no incluye el carácter en el índice final.")
console.log(string.substring(0, 4)); // Java
console.log(string.substring(4, 10)); // Script
console.log(string.substring(4)); // Script

console.log(country.substring(0, 3)); // Arg
console.log(country.substring(5, 9)); // tina
console.log(country.substring(5)); // un solo argumento, va desde ese lugar hasta el final (tina).

console.log("\nsplit() El método split divide una cadena en un lugar específico.")
let text = "Hola estamos practicando JavaScript";
let countries = "Argentina, Tahilandia, Madagascar, Paises Bajos, Finlandia";
console.log(text.split()); // Cambios en una matriz -> ["Hola estamos practicando JavaScript"]
console.log(text.split(" ")); // Dividir a una matriz en el espacio -> ["hola", "estamos", "practicando", "JavaScript"]

console.log(firstName.split()); // Cambiar a una matriz - > ["Pablo"]
console.log(firstName.split("")); // Dividir en una matriz en cada letra ->  ["P", "a", "b", "l", "o"]

console.log(countries.split(",")); // Dividir en cualquier matriz en coma -> ["Argentina", " Tahilandia", " Madagascar", " Paises Bajos", "Finlandia"]
console.log(countries.split(", ")); //  ["Argentina", " Tahilandia", " Madagascar", " Paises Bajos", "Finlandia"]

console.log("\ntrim() Elimina el espacios al principio o al final de una cadena.")
let trimText = "      Hola estamos practicando JavaScript     "
let trimName = " pablo "
console.log(trimText);
console.log(trimText.trim(" "));
console.log(trimName);
console.log(trimName.trim()); // todavía elimina espacios al principio y al final de la cadena

console.log("\nincludes() Toma un argumento de subcadena y verifica si existe un argumento de subcadena en la cadena. includes() devuelve un valor booleano. Si existe una subcadena en una cadena, devuelve True; de lo contrario, devuelve False.")
console.log(text.includes("practicando")); // True
console.log(text.includes("alfajor")); // False: ¡se distingue entre mayúsculas y minúsculas!
console.log(string.includes("Script")); // True
console.log(string.includes("script")); // False
console.log(string.includes("java")); // False
console.log(string.includes("Java")); // True
console.log("\nincludes() pruebas con Argentina")
console.log(country.includes("arg")); // False
console.log(country.includes("Arg")); // True
console.log(country.includes("tina")); // True
console.log(country.includes("Tina")); // False

console.log("\nreplace() toma como parámetro la subcadena antigua y una nueva subcadena. string.replace(oldsubstring, newsubstring);")
console.log(string.replace("JavaScript", "Python")); // 30 Days Of Python
console.log(country.replace("tina", "master")); // Nomanland

console.log("\ncharAt() Toma índice y devuelve el valor en ese índice. string.charAt(index);")
console.log(text.charAt(0)); // H
console.log(text.charAt(3)); // a
console.log(text.charAt(text.length - 1)); // t

console.log("\ncharCodeAt() Toma el índice y devuelve el código char (número ASCII) del valor en ese índice. string.charCodeAt(index);")
console.log(text.charCodeAt(3)); // a ASCII numbero es 97
console.log(text.charCodeAt(11)); // s ASCII es 115


console.log("\nindexOf() Toma una subcadena y si la subcadena existe en una cadena, devuelve la primera posición de la subcadena; si no existe, devuelve -1 string.indexOf(substring);")
console.log(text.indexOf("amos")); // 8 (ESTamos)
console.log(text.indexOf("dia")); // -1
console.log(text.indexOf("estamos")); // 5
console.log(text.indexOf("practicando")); // 0
console.log(string.indexOf("JavaScript")); // 0
console.log(string.indexOf("Script")); // 4
console.log(string.indexOf("script")); // -1

console.log("\nlastIndexOf()")
// lastIndexOf(): Toma una subcadena y si la subcadena existe en una cadena, devuelve la última posición de la subcadena; si no existe, devuelve -1 string.lastIndexOf(substring);
let indexOfString = "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(indexOfString.lastIndexOf("love")); // 67
console.log(indexOfString.lastIndexOf("you")); // 63
console.log(indexOfString.lastIndexOf("JavaScript")); // 38

console.log("\nconcat(): toma muchas subcadenas y las une. string.concat(substring, substring, substring);")
let stringConcat= "Hola, como andas?"
let countryConcat = "Argen";
let substring = "Pablo";

console.log(string.concat("es", "el", "mejor", "lenguaje")); // 
console.log(country.concat("tina")); // Argentina

console.log("\nstartsWith() toma una subcadena como argumento y verifica si la cadena comienza con esa subcadena especificada. Devuelve un valor booleano (True o False). string.startsWith(substring)");
let starts = "Love is the best to in this world";

console.log(starts.startsWith("Love")); // True
console.log(starts.startsWith("love")); // False
console.log(starts.startsWith("Lov")); // True

let countryStarts = "Argentina";
console.log(countryStarts.startsWith("arg")); // False
console.log(countryStarts.startsWith("Arg")); // True
console.log(countryStarts.startsWith("ARG")); //  False


console.log("\nendsWith() toma una subcadena como argumento y verifica si la cadena termina con esa subcadena especificada. Devuelve un valor booleano (True o False) string.endsWith(substring)");
console.log(starts.endsWith("world")); // True
console.log(starts.endsWith("love")); // False
console.log(starts.endsWith("in this world")); // True
console.log(countryStarts.endsWith("tina")); // True
console.log(countryStarts.endsWith("tinas")); // False
console.log(countryStarts.endsWith("gentina")); //  True

console.log("\nsearch(): toma una subcadena como argumento y devuelve el índice de la primera coincidencia. El valor de búsqueda puede ser una cadena o un patrón de expresión regular string.search(substring)");
let search = "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(search.search("love")); // 2
console.log(search.search(/javascript/gi)); // 7 g- significa buscar en todo el texto, i - no distingue entre mayúsculas y minúsculas

console.log("match: toma una subcadena o un patrón de expresión regular como argumento y devuelve una matriz si hay una coincidencia; de lo contrario, devuelve un valor nulo. Veamos cómo se ve un patrón de expresión regular. Comienza con /signo y termina con /signo. string.match(substring)");

//Coincidencia de sintaxis
console.log(search.match("love"));
//["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
let pattern = /love/gi;
console.log(search.match(pattern)); // ["love", "love", "love"]
//Extraigamos números del texto usando una expresión regular. Esta no es la sección de expresiones regulares, ¡no se asuste! Cubriremos las expresiones regulares más adelante.

let txt = "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d+/;
// d con carácter de escape significa que d no es una d normal sino que actúa como un dígito + significa uno o más dígitos,
console.log(txt.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// si hay g después de eso, significa global, busque en todas partes.
console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]

console.log("\nrepeat(): toma un número como argumento y devuelve la versión repetida de la cadena. string.repeat(n)");
let repeat = "love";
console.log(repeat.repeat(4)); // lovelovelovelove


//Cambio del tipo de datos
//Casting: Conversión de un tipo de datos a otro tipo de datos. Usamos parseInt(), parseFloat(), Number(), + sign, str() Cuando hacemos operaciones aritméticas, los números de cadena deben convertirse primero en enteros o flotantes; de lo contrario, devuelve un error.
//Cadena a Int
//Podemos convertir el número de cadena en un número. Cualquier número dentro de una comilla es un número de cadena. Un ejemplo de un número de cadena: '10', '5', etc. Podemos convertir cadena a número usando los siguientes métodos:

console.log("parseInt() / Número() / parseFloat / signo más +")
let num = "10";
let numInt = parseInt(num);
console.log(numInt); // 10
num = "10";
numInt = Number(num);

console.log(numInt); // 10
num = "10";
numInt = +num+1;
console.log(typeof(numInt)); // 10
console.log(numInt); // 10

-------------------------------------------------------------------------------------- 

aca termina el comentario de las pruebas */



//   Ejercicio: Nivel 1
console.log("\nEjercicios: Nivel 1\n\n")
// Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let challenge = ' 30 Days Of JavaScript ';
// Imprima la cadena en la consola del navegador usando console.log()
console.log(challenge);
// Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(`La longitud del string: ${challenge.length}`);
// Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
console.log(challenge.toUpperCase());
// Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(challenge.toLowerCase());
// Corta (segmenta) la tercer palabra de la cadena usando el método substr() o substring()
console.log(challenge.substring(8,10)); //   of
// Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
console.log(challenge.substring(3)); //como va al final uso un solo argumento.
// Verifique si la cadena contiene una palabra Script usando el método includes()
console.log(`Contiene la palabra Script? ${challenge.includes('Script')}`)
// Divide la cadena en un array usando el método split()
console.log(challenge.split(" "));
// Divida la cadena 30 Days Of JavaScript en el espacio usando el método split()
console.log(challenge.split(""));
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let challenge2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let result;
console.log(result = challenge2.split(",")); //guardo el object, sino challenge2 sigue siendo string.
console.log(`la variable challenge2 ahora la guardamos en un ${typeof(result)}`)
// Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log(challenge.replace("JavaScript", "Python"))
// ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log(`el carácter en el indice 15 (30 Days Of JavaScript) es: ${challenge.charAt(15)}`);
// ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
console.log(`el ASCII del caracter J es: ${challenge.charCodeAt(11)}`);
// Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(`la primera aparecion del caracter a es en el indice: ${challenge.indexOf("a")}`);
// Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(`la ultima aparicion del caracter 'a' es en el indice: ${challenge.lastIndexOf("a")}`);
// Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let why = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(`No puedes terminar una oración con porque porque porque es una conjunción`);
console.log(`La palabra porque aparece primera en el indice: ${why.indexOf("porque")}`);
// Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(`La palabra porque aparece primera en el indice: ${why.lastIndexOf("porque")}`);
// Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(`El indicede la primera aparicion de la palabra porque es: ${why.search("porque")}`);
// Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
console.log(`Sin trim():\n${challenge}\nCon trim():\n${challenge.trim()}`);
// Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(`La cadena empieza con 30?${challenge.startsWith(" 30")}`); //dejo elespacio porque deje originalmente para despuez hacer trim()
// Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(`La cadena termina con cript? ${challenge.endsWith("cript ")}`); //dejo elespacio porque deje originalmente para despuez hacer trim()
// Usa el método match() para encontrar todos los a en 30 días de JavaScript
console.log(`cuantas 'a' hay en el string? ${challenge.match(/a/gi)}`);
// Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
let days = '30 Days Of';
console.log(days.concat(" JavaScript"));
// Use el método repeat() para imprimir 30 días de JavaScript 2 veces
console.log(challenge.repeat(2));

// Ejercicio: Nivel 2
console.log("\n\n\nEjercicios: Nivel 2\n\n")
// Usando console.log() imprima la siguiente declaración:

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let holmesQuote = 'There is no exercise better for the heart than reaching down and lifting people up.';
console.log(holmesQuote);
// Usando console.log() imprima la siguiente cita de la Madre Teresa:

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let teresaQuote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(teresaQuote);
// Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
let num1 = 10;
let num2 = "10";
result = num1 === num2;
console.log(`Resultado sin castear: ${result}`);
result = num1 === +num2;
console.log(`Resultado con cast (+variable): ${result}`);
// Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
num1 = 10;
num2 = 9.8;
result = num1 === num2;
console.log(`Resultado sin redondear: ${result}`);
let num3 = Math.ceil(num2)
result = num1 === num3;
console.log(`Resultado con Math.ceil(): ${result}`);
// Verifique si 'on' se encuentra tanto en Python como en la jerga
let pyt = "Python";
let jerga = "jerga";

console.log(`se encuentra 'on' en Python? ${pyt.includes("on")}`);
console.log(`se encuentra 'on' en jerga? ${jerga.includes("on")}`);
// Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.
let jargon = 'Espero que este curso no esté lleno de jerga';
console.log(`jargon esta en la oracion? ${jargon.includes("jargon")}`);
// Genere un número aleatorio entre 0 y 100 inclusive.
let random = Math.floor((Math.random()*101));
console.log(`numero random de 0 a 100: ${random}`);
// Genere un número aleatorio entre 50 y 100 inclusive.  
let random50 = Math.floor((Math.random()*51)+50);
console.log(`numero random de 50 a 100: ${random50}`);
// Genere un número aleatorio entre 0 y 255 inclusive.
let random255 = Math.floor((Math.random()*258));
console.log(`numero random de 0 a 255: ${random255}`);
// Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
console.log(`Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio. variable[3] = a`);
let js = "JavaScript";
console.log(js[3]);
// Use console.log() y caracteres de escape para imprimir el siguiente patrón.
let pat = "1a 1s 1d 1f 1g\n2a 1q 2w w4 f8\nq3 1e 3v 9c n27\n b4 h1 h4 d16 z64\na5 d1 h5 j25 v125"
console.log(pat.match(/\d+/g))
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(why.substring(34,55));

// Ejercicios: Nivel 3
console.log("\n\n\nEjercicios: Nivel 3\n\n")
// 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración.
let love = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.';
console.log(`Cuantas palabras amor hay en el texto? ${love.match(/amor/dg).length}`);
// ajajaja increible jugada la del .lenght!
// Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(`Cuantas palabras porque hay en variable why? ${why.match(/porque/dg).length}`);

