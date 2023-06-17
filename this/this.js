// Object Method Binding
const person = {
  firstName: "Sindhuja",
  lastName: "Shankar",
  branch: "CSE",
  degree: "BE",
  //this Method
  fullName: function () {
    return `${this.firstName} ${this.lastName}
    ${this.degree}`;
  },
};
console.log(person.fullName());

//explicit Function Binding
//we can use both call() and apply() Methods
const userA = {
  UserName: function () {
    return `${this.fName} ${this.lName}`;
  },
};
const userB = {
  fName: "Jeevisha",
  lName: "Dhajina",
};
let info = userA.UserName.call(userB);
console.log(info);

//function borrowing bind() method
const fruitA = {
  fruitOne: "Apple",
  fruitTwo: "Orange",
  twoFruits: function () {
    return `${this.fruitOne} ${this.fruitTwo}`;
  },
};
const fruitB = {
  fruitOne: "Mango",
  fruitTwo: "Grapes",
};
let twoFruits = fruitA.twoFruits.bind(fruitB);
console.log(twoFruits());

//this in method
const sports = {
  sportA: "Football",
  sportB: "Kabadi",
  sportC: "Cricket",

  favSport() {
    console.log(this.sportA);
  },
};
sports.favSport();

//by using this we can access the outer variables inside the function
let sentence_1 = { sentence: "sindhuja was playing" };
let sentence_2 = { sentence: "sindhuja was sleeping" };
function sentences() {
  console.log(this.sentence);
}
//use the same function in two objects
sentence_1.s = sentences;
sentence_2.s = sentences;
sentence_1.s();
sentence_2.s();

const sentence = {
  subject: "Sindhuja",
  verb: "was playing",
};
function sentencePattern() {
  console.log(`${this.subject} ${this.verb}`);
}
sentence.stnc = sentencePattern;
sentence.stnc();

//Arrow function have no their own "this"
//taken from the outer normal function
let user = {
  firstName: "Sindhuja",
  info() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};
user.info();
