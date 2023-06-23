"use strict";

let names = ["Pablo", "Laura", "Bart"];
let [personOne, personTwo, personThree] = names;
console.log(personOne);

//Otro ejemplo
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};
// Creemos una función que proporcione información sobre el objeto persona sin desestructurar

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  let personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is  ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;
  return personInfo;
};

console.log(getPersonInfo(person));

const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

// Ejercicios: Nivel 1
console.log(`\n\nEjercicios: Nivel 1:\n\n`);

const constants = [2.72, 3.14, 9.81, 37, 100];
console.log(
  `Desestructurar y asignar los elementos del array de constantes para e, pi, gravedad, humanBodyTemp, waterBoilingTemp.`
);
let [e, pi, gravedad, humanBodyTemp, waterBoilingTemp] = constants;
console.log(
  `let [e,pi,gravedad, humanBodyTemp, waterBoilingTemp] = constants;`
);
console.log(e, pi, gravedad, humanBodyTemp, waterBoilingTemp);

const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
console.log(
  `Desestructurar y asignar los elementos del array de países a fin, est, sw, den, nor`
);
let [fin, est, sw, den, nor] = countries;
console.log(`let [fin,est,sw,den,nor] = countries`, fin, est, sw, den, nor);
console.log(`Desestructurar el objeto rectángulo por sus propiedades o keys.`);
let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(`let {width, height, area, perimeter} = rectangle;`, w, h, a, p);

// Ejercicios: Nivel 2
console.log(`\n\nEjercicios: Nivel 2:\n\n`);
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

console.log(
  `Iterar a través del array de usuarios y obtener todas las keys del objeto utilizando la desestructuración`
);
for (const user of users) {
  console.log(
    `Name: ${user.name}, Score: ${user.scores}, Skills: ${user.skills}, Age: ${user.age}`
  );
}
console.log(`Encuentra las personas que tienen menos de dos habilidades`);
for (const user of users) {
  if (user.skills.length < 2)
    console.log(
      `Name: ${user.name}, Score: ${user.scores}, Skills: ${user.skills}, Age: ${user.age}`
    );
}

// Ejercicios: Nivel 3
console.log(`\n\nEjercicios: Nivel 3:\n\n`);
console.log(
  `Un desarrollador junior estructura el nombre del estudiante, las habilidades y la puntuación en un array de arrays que puede no ser fácil de leer. Desestructure la siguiente matriz nombre a nombre, array de habilidades a habilidades, array de puntuaciones a puntuaciones, puntuación de JavaScript a jsScore y puntuación de React a reactScore variable en una línea.`
);
//

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [name1, skills, score] = student;
let [, , jsScore, reactScore] = score;
console.log(
  `nombre: ${name1}, Habilidades: ${skills}, Puntuacion JS: ${jsScore}, Puntuacion React: ${reactScore}`
);

console.log(`Escribe una función llamada convertArrayToObject que pueda convertir el array en un objeto estructurado.
`);
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(students) {
  let a, b;
  students.forEach((e) => {
    let [name, skills, scores] = e;
    name == "David"
      ? (a = convertObject(name, skills, scores))
      : (b = convertObject(name, skills, scores));
  });
  function convertObject(na, sk, sc) {
    let newObject = {
      name: na,
      skills: sk,
      scores: sc,
    };
    return newObject;
  }
  return [a, b];
}
let newObjects = convertArrayToObject(students);
let [p1, p2] = newObjects;
console.log(p1, p2);
//forma cavernicola! muy cavernicola, pero funciona, obviamente solo para estos dos casos, habria que cranear como hacer para pasar cualquier array a objeto sin importar cuantos sean.
