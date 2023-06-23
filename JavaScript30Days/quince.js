class Person {
  constructor(
    firstName = "Nombre",
    lastName = "Apellido",
    age = "Edad",
    country = "Pais",
    city = "Ciudad",
    score = 0
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
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
console.log(person1, person2);
