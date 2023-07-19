class Person {
  constructor(
    firstName = "Name",
    lastName = "Last Name",
    age = "Age",
    country = "Country",
    city = "City",
    score = 0
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = score;
    this.skills = [];
  }
  get getScore() {
    return this.score;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `He knows ${skills}` : "";

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }

  // Los métodos estáticos no se llaman en las instancias de la clase. En cambio, se llaman en la propia clase. A menudo se trata de funciones de utilidad, como las funciones para crear o clonar objetos. Un ejemplo de método estático es Date.now(). El método now se llama directamente desde la clase.

  static randomSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
}

const person1 = new Person("Pablo", "Copes", 37, "Argentina", "Tandil");
const person2 = new Person("Laura", "Gonzalez", 30, "Argentina", "Tandil");
const emptyPerson = new Person();
person1.setScore = 10;
person2.setScore = 6;
person1.setSkill = "JavaScript";
person1.setSkill = "Java";
person1.setSkill = "Spring Boot";
person2.setSkill = "HTML";
person2.setSkill = "CSS";
console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person1.getScore, person1.getSkills);
console.log(person1.getPersonInfo());

console.log(Person.randomSkill());

// Utilizando la herencia podemos acceder a todas las propiedades y métodos de la clase padre. Esto reduce la repetición de código.
class Student extends Person {
  constructor(firstName, lastName, age, country, city, score, gender = gender) {
    super(firstName, lastName, age, country, city, score);
    this.gender = gender;
  }
  saySomething() {
    console.log("I am a child of the person class");
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";
    let pronoun = this.gender == "Male" ? "He" : "She";

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
}
console.log(`\n\n----------------------\n\n`);
const s1 = new Student(
  "Pablo",
  "Copes",
  37,
  "Argentina",
  "Tandil",
  400,
  "Male"
);
console.log(s1);
console.log(s1.getFullName());
console.log(s1.getPersonInfo(), "\n");

class Animal {
  constructor(name, age, legs, colour) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.colour = colour;
  }
  get personalInfo() {
    let statement = `Name: ${this.name}\nAge: ${this.age}\n+${this.legs}+\nColour: ${this.colour}`;
    return statement;
  }
}

class Dog extends Animal {
  constructor(name, age, legs, colour, bark) {
    super(name, age, legs, colour);
    this.bark = bark;
  }
  get personalInfo() {
    let statement = `Name: ${this.name}\nAge: ${this.age} \nLegs: ${this.legs}\nColour: ${this.colour}\nBark: ${this.bark}\n`;
    return statement;
  }
}
class Cat extends Animal {
  constructor(name, age, legs, colour, meow) {
    super(name, age, legs, colour);
    this.meow = meow;
  }
  get personalInfo() {
    let statement = `Name: ${this.name}\nAge: ${this.age} \nLegs: ${this.legs}\nColour: ${this.colour}\nMeow: ${this.meow}\n`;
    return statement;
  }
}

const dog1 = new Dog("Muka", 7, 4, "Black, brown and white", "Loud");
const cat1 = new Cat("Mish", 1, 4, "White and brown", "Low");
console.log(dog1.personalInfo);
console.log(cat1.personalInfo);

// Crea una clase llamada PersonAccount. Tiene propiedades de nombre, apellido, ingresos, gastos y tiene métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos y su descripción.
class PersonAccount {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.income = [];
    this.expense = [];
  }
  get getTotalIncome() {
    let sum = 0;
    this.income.forEach((e) => {
      sum += e.amount;
    });
    return sum;
  }
  //acordate como recorrer
  get getTotalExpense() {
    let sum = 0;
    this.expense.forEach((e) => {
      sum += e.amount;
    });
    return sum;
  }

  get getAccountInfo() {
    let statement = `\nName: ${this.name}\nLast Name: ${
      this.lastName
    }\nTotal Income: ${this.getTotalIncome}\nTotal Expense: ${
      this.getTotalExpense
    }\nDate: ${PersonAccount.showDateTime()}`;
    return statement;
  }
  get getAccountBalance() {
    return this.getTotalIncome - this.getTotalExpense;
  }
  set setAddIncome(a) {
    this.income.push(a);
  }
  set setAddExpense(a) {
    this.expense.push(a);
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (date < 10) {
      date = "0" + date;
    }
    if (month < 10) {
      month = "0" + month;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    let dateMonthYear = date + "/" + month + "/" + year;
    let time = hours + ":" + minutes + ":" + seconds;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
  expenseFilter(arr, str) {
    let filter = arr.filter((desc) => desc.description.includes(str));
    return filter;
  }
  expenseFilterTotal(arr) {
    let sum = arr.reduce(
      (a, b) => a + (typeof b.amount == "number" ? b.amount : 0),
      0
    );
    return sum;
  }
}

const a1 = new PersonAccount("Pablo", "Copes");
a1.setAddIncome = { amount: 150000, description: "Sueldo 1" };
a1.setAddIncome = { amount: 120000, description: "Sueldo 2" };
a1.setAddExpense = { amount: 700, description: "Leche" };
a1.setAddExpense = { amount: 755, description: "Leche" };
a1.setAddExpense = { amount: 1500, description: "Milanesas" };
console.log(a1.getAccountInfo);
console.log("Total income", a1.getTotalIncome);
console.log("Total expense", a1.getTotalExpense);
console.log("Balance", a1.getAccountBalance);
console.log(a1.expenseFilter(a1.expense, "Leche"));
console.log(a1.expenseFilter(a1.expense, "Milanesas"));
console.log("Cuanto gasto hay en Mialnesas? ", a1.expenseFilterTotal(a1.expenseFilter(a1.expense, "Milanesas")));
console.log("Cuanto gasto hay en Leche? ",a1.expenseFilterTotal(a1.expenseFilter(a1.expense, "Leche")));
