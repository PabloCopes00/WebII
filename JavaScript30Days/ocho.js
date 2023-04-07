"use strict"
//objetos:

const person = {
    firstName: "Pablo",
    lastName: "Copes",
    age: 36,
    country: "Argentina",
    city: "Tandil",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "Angular",
        "Python",
    ],
    isMarried: false,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    "phone number": "+5492494557719",
};
console.log(`Accediedo con . por ej - person.firstName`);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location, "No esta definida la propiedad location"); // undefined

// se puede acceder al valor utilizando corchetes y el nombre de la clave
console.log(`Se puede acceder al valor utilizando corchetes y el nombre de la clave entre comillas`);
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["age"]);
console.log(person["location"], "No esta definida la propiedad location"); // undefined

// por ejemplo, para acceder al número de teléfono sólo utilizamos el método del corchete
console.log("Accediendo con corchete y comillas", person["phone number"]);
console.log(`Accediendo al objet person.getFullName()`, person.getFullName());


const person2 = {
    firstName: "Pablo",
    lastName: "Copes",
    age: 36,
    country: "Argentina",
    city: "Tandil",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Python",
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    address: {
        street: "Alsina",
        pobox: 213,
        city: "Tandil",
    },
};
person2.nationality = "Argentino";
person2.title = "Student";
person2.skills.push("PHP");
person2.skills.push("SQL");

person2.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(", ");
    let lastSkill = this.skills.splice(this.skills.length - 1)[0];
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
    let fullName = this.getFullName();
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe Studies ${skills}.`;
    return statement;
};
console.log(person2);
console.log(person2.getPersonInfo());

console.log(`\nObject.assign: Para copiar un objeto sin modificar el objeto original`);

const copyPerson = Object.assign({}, person);
console.log(copyPerson);
console.log(`\nObject.keys: Para obtener las claves o propiedades de un objeto como un array`);
const keys = Object.keys(copyPerson);
console.log("Object.keys(copyPerson)", keys); //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(person2.address);
console.log("Object.keys(person2.address)", address); //['street', 'pobox', 'city']
const values = Object.values(copyPerson);
console.log("Object.values(copyPerson)", values);
const entries = Object.entries(copyPerson);
console.log(`Object.entries:Para obtener las claves y valores de un array`, entries);
console.log("hasOwnProperty: Para comprobar si una clave o propiedad específica existe en un objeto.");
console.log("tiene un metodo Score?", copyPerson.hasOwnProperty("score"));
console.log("tiene un metodo firstName?", copyPerson.hasOwnProperty("firstName"));

// Ejercicios: Nivel 1
console.log(`\n\nEjercicios: Nivel 1:\n\n`);
// Crear un objeto vacío llamado dog
const dog = {};
// Imprime el objeto dog en la consola
console.log(`imprimir objeto dog`, dog);
// Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof
dog.name = 'Muka';
dog.legs = 'largas';
dog.color = "negro";
dog.age = 7;
dog.bark = function () {
    let bark = "woof woof"
    return bark;
};
console.log(`Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof`, dog);
// Obtener name, legs, color, age y el valor de bark del objeto dog
let dogValues = `Name: ${dog.name}, Legs: ${dog.legs}, Color: ${dog.color}, Age: ${dog.age}, Bark: ${dog.bark()}`;
console.log("Obtener name, legs, color, age y el valor de bark del objeto dog\n", dogValues);

// 
console.log(`Establecer nuevas propiedades al objeto dog: breed, getDogInfo()`);
dog.breed = true;
dog.getDogInfo = function () {
    let breed = `${dog.breed ? "es de raza," : "no es de raza,"}`
    let info = `${dog.name} ${breed} es de color ${dog.color}, tiene ${dog.age} años, su sonido es como un ${dog.bark()}`;
    return info
}
console.log(`\n`, dog.getDogInfo());


// Ejercicios: Nivel 2
console.log(`\n\nEjercicios: Nivel 2:\n\n`);
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: true,
        points: 40
    }
}
// Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
function findMaxSkill() {
    let counter = 0;
    let name = "";
    for (let i = 0; i < Object.keys(users).length; i++) {
        if (Object.entries(users)[i][1].skills.length > counter) {
            counter = Object.entries(users)[i][1].skills.length;
            name = Object.keys(users)[i];
        }
    }
    let statement = `${name} es el usuario con mayores habilidades con un total de ${counter}`;
    return statement;
}
console.log(findMaxSkill());

// Contar los usuarios conectados
function online(){
    let counter = 0;
    for (let i = 0; i < Object.keys(users).length; i++) {
        let online = Object.entries(users)[i][1].isLoggedIn;
        if (online){
            counter++;
        }
    }
    return counter;
}
console.log("Cantidad de usuarios online? ",online());
//Contar los usuarios que tienen más de 50 puntos del siguiente objeto.


// Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios

// Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original

// Obtener todas las claves o propiedades del objeto usuarios

// Obtener todos los valores del objeto usuarios

// Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas.

// Ejercicios: Nivel 3
console.log(`\n\nEjercicios: Nivel 3:\n\n`);
// Crea un objeto literal llamado personAccount. Tiene las propiedades firstName, lastName, incomes, expenses y tiene los metodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción.

// **** Preguntas:2, 3 y 4 se basan en los siguientes dos arrays: users y products ()

// const users = [
//   {
//     _id: "ab12ex",
//     username: "Alex",
//     email: "alex@alex.com",
//     password: "123123",
//     createdAt: "08/01/2020 9:00 AM",
//     isLoggedIn: false,
//   },
//   {
//     _id: "fg12cy",
//     username: "Asab",
//     email: "asab@asab.com",
//     password: "123456",
//     createdAt: "08/01/2020 9:30 AM",
//     isLoggedIn: true,
//   },
//   {
//     _id: "zwf8md",
//     username: "Brook",
//     email: "brook@brook.com",
//     password: "123111",
//     createdAt: "08/01/2020 9:45 AM",
//     isLoggedIn: true,
//   },
//   {
//     _id: "eefamr",
//     username: "Martha",
//     email: "martha@martha.com",
//     password: "123222",
//     createdAt: "08/01/2020 9:50 AM",
//     isLoggedIn: false,
//   },
//   {
//     _id: "ghderc",
//     username: "Thomas",
//     email: "thomas@thomas.com",
//     password: "123333",
//     createdAt: "08/01/2020 10:00 AM",
//     isLoggedIn: false,
//   },
// ];

// const products = [
//   {
//     _id: "eedfcf",
//     name: "mobile phone",
//     description: "Huawei Honor",
//     price: 200,
//     ratings: [
//       { userId: "fg12cy", rate: 5 },
//       { userId: "zwf8md", rate: 4.5 },
//     ],
//     likes: [],
//   },
//   {
//     _id: "aegfal",
//     name: "Laptop",
//     description: "MacPro: System Darwin",
//     price: 2500,
//     ratings: [],
//     likes: ["fg12cy"],
//   },
//   {
//     _id: "hedfcg",
//     name: "TV",
//     description: "Smart TV:Procaster",
//     price: 400,
//     ratings: [{ userId: "fg12cy", rate: 5 }],
//     likes: ["fg12cy"],
//   },
// ];
// Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB. a. Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.
// b. Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación

// El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades. a. Crear una función llamada rateProduct que califique el producto b. Crear una función llamada averageRating que calcule la valoración media de un producto

// Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like