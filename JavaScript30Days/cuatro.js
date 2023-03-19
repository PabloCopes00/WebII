"use strict";

// Ejercicios: Nivel 1
console.log(`\n\nEjercicios: Nivel 1:\n\n`);
console.log(`Funciones:\n- whoIsOlder\n- examScore\n- whichSeason\n- weekOrWeekend\n- howManyDays\n- `);
// Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
//ya lo hicimos en el día 3.
// Ingrese su edad: 30
// Tiene la edad suficiente para conducir.

// Ingrese su edad:15
// Te faltan 3 años para conducir.
// Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.


//todo esto ya se hizo, vamos a hacer un programa donde dos personas ingresen su nombre y su edad y veremos quien es mas grande.
/**Enter Name and Age of 2 people and compare who is older.*/
function whoIsOlder() {
    let name1 = prompt("Ingrese su nombre.");
    let age1 = +prompt("Ingrese su edad.");
    let name2 = prompt("Ingrese su nombre.");
    let age2 = +prompt("Ingrese su edad.");
    if (age1 > age2) {
        console.log(`${name1}, sos mas grande que ${name2} por ${age1 - age2} años.`)
    } else if (age2 > age1) {
        console.log(`${name2}, sos mas grande que ${name1} por ${age2 - age1} años.`)
    } else {
        console.log(`${name1} y ${name2} tienen la misma edad.`);
    }
    console.log(`\nMismo ejercicio con operador ternario no detecta edades igales\n`);
    age1 > age2 ? console.log(`${name1}, sos mas grande que ${name2} por ${age1 - age2} años.`) : console.log(`${name2} sos mas grande que ${name1}, por ${age2 - age1} años.`);
}
//whoIsOlder();

// Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?

// x % 2 == 0; si esto se cumple el numero x es par, sino impar
// x % 2 != 0; si esto se cumple el numero x es impar, sino par

// Ingrese un número: 2
// 2 es un número par

// Ingrese un número: 9
// 9 es un número impar


// Ejercicios: Nivel 2
console.log(`\n\nEjercicios: Nivel 2:\n\n`);
// Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
/**pasar por argumento la nota numerica, y nos dira que no ta sacamos (A B C D F). */
function examScore(x) {
    switch (true) {
        case x >= 80 && x <= 100:
            console.log(`Excelente! usted saco 'A'`);
            break;
        case x >= 70 && x <= 89:
            console.log(`Excelente! usted saco 'B'`);
            break;
        case x >= 60 && x <= 69:
            console.log(`Muy Bien! usted saco 'C'`);
            break;
        case x >= 50 && x <= 59:
            console.log(`Bien! usted saco 'D'`);
            break;
        case x >= 0 && x <= 49:
            console.log(`Que paso!? usted saco 'F'`);
            break;
    }
}
// examScore(88);


// Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :

// Septiembre, Octubre o Noviembre, la temporada es Otoño.
// Diciembre, Enero o Febrero, la temporada es Invierno.
// Marzo, Abril o Mayo, la temporada es Primavera
// Junio, Julio o Agosto, la temporada es Verano

/**ingrese un mes del año y el programa le dirá en que estacion del año estamos. */
function whichSeason() {
    let a = prompt("Ingrese un mes del año").toLowerCase();
    switch (a) {
        case 'diciembre': case 'enero': case 'febrero': case 'marzo':
            console.log(`estamos en Verano! a disfrutar!!`);
            break;
        case 'abril': case 'mayo':
            console.log(`estamos en Otoño! hay que empezar a abrigarse!!`);
            break;
        case 'junio': case 'julio': case 'agosto':
            console.log(`estamos en Invierno! seguro estas emponchado/a hasta la cabeza.`);
            break;
        case 'septiembre': case 'setiembre': case 'octubre': case 'noviembre':
            console.log(`estamos en primavera! a disfrutar de las flores, dentro de poco llega el calor!`);
            break;
        default: console.log(`${a} no es un mes! ingresa un mes correctamente escrito!`);
    }
}
// whichSeason();

// Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.

/**Ingrese un dia de la semana y el programa reconocera si es dia laboral o fin de semana. */
function weekOrWeekend(d) {
    // refactorizar haciendo whitelist
    let day = d.toLowerCase();
    let days = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
    let check = days.indexOf(day);
    if (check != -1) {
        if (day == 'sabado' || day == 'domingo') {
            console.log(`Hoy es ${day[0].toUpperCase() + day.substring(1)}, por eso tenes que disfrutar del fin de semana!`);
        } else {
            console.log(`Hoy es ${day[0].toUpperCase() + day.substring(1)}, es día laboral! falta un poco para el finde! a trabajar!`);
        }
    } else {
        console.log(`${d} no es un dia de la semana, ingresa uno correctamente.`);
    }

}
// weekOrWeekend('Sabado');

//     ¿Qué día es hoy? Sábado
//     El sábado es fin de semana.

//     ¿Qué día es hoy? sábAdo
//     El sábado es fin de semana.

//     ¿Qué día es hoy? Viernes
//     El viernes es un día laborable.

//     ¿Qué día es hoy? ViErNes
//     El viernes es un día laborable.


// Ejercicios: Nivel 3
console.log(`\n\nEjercicios: Nivel 3:\n\n`);
// Escribe un programa que diga el número de días en un mes.
//   Introduce un mes: Enero
//   Enero tiene 31 días.

//   Introduce un mes: ENERO
//   enero tiene 31 dias

//   Introduce un mes: Febrero
//   Febrero tiene 28 días.

//   Introduce un mes: FEbrero
//   Febrero tiene 28 días.
function howManyDays(d) {
    //vamos a intentar chequear antes con una whitelist.
    let day = d.toLowerCase();
    let months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "setiembre", "octubre", "noviembre", "diciembre"]
    let month = months.indexOf(day);

    if (month != -1) {
        if (day == "febrero") {
            console.log(`${day[0].toUpperCase() + day.substring(1)} tiene 28 Días`);
        } else if (day == 'abril' || day == 'junio' || day == 'septiembre' || day == 'noviembre') {
            console.log(`${day[0].toUpperCase() + day.substring(1)} tiene 30 Días`);
        } else {
            console.log(`${day[0].toUpperCase() + day.substring(1)} tiene 31 Días`);
        }
    } else {
        console.log(`${d} no es un mes, Ingrese un mes correctamente.`);
    }
}


// Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.
function howManyDaysB(d) {
    //vamos a intentar chequear antes con una whitelist.
    let now = new Date();
    let day = d.toLowerCase();
    let months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "setiembre", "octubre", "noviembre", "diciembre"]
    let month = months.indexOf(day);

    if (month != -1) {
        if (day == "febrero") {
            if (now.getFullYear() % 4 == 0) {
                console.log(`${day[0].toUpperCase() + day.substring(1)} tiene 29 Días`);
            }
            else {
                console.log(`${day[0].toUpperCase() + day.substring(1)} tiene 28 Días`);
            }
        } else if (day == 'abril' || day == 'junio' || day == 'septiembre' || day == 'noviembre') {
            console.log(`${day[0].toUpperCase() + day.substring(1)} tiene 30 Días`);
        } else {
            console.log(`${day[0].toUpperCase() + day.substring(1)} tiene 31 Días`);
        }
    } else {
        console.log(`${d} no es un mes, Ingrese un mes correctamente.`);
    }
}
// 🎉 FELICITACIONES ! 🎉