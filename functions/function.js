function myFunction() {
  console.log("my function");
}
myFunction();
myFunction();

//local variables
// A variable declared inside a function is only visible inside that function.
function myInfo() {
  const firstName = "Sindhuja";
  const lastName = "Shankar";
  console.log(firstName + " " + lastName);
}
myInfo();

//Local Variables
// A function can access an outer variable
let user = "Sindhuja";
function collegeName() {
  let intro = "I'm " + user;
  console.log(intro);
}
collegeName();

//Parameters
function withParameters(name, age) {
  console.log(name + ": " + age);
}
withParameters("Sindhuja", 21);

//returning values

function additionOfTwoNumbers(number1, number2) {
  return number1 + number2;
}
console.log(additionOfTwoNumbers(1, 4));

//*regular function*
//function declaration
function subtractOfTwoNumbers() {
  return 9 - 2;
}
console.log(subtractOfTwoNumbers());

//function expression
const sum = function (val1, val2) {
  return val1 + val2;
};
console.log(sum(4, 5));

//Arrow function
//Arrow function expression
const add = (numA, numB) => {
  return numA + numB;
};
console.log(add(2, 3));

const numberA = (value1, value2) => value1 + value2;
console.log(numberA(2, 4));

//default values
function myInfo(myName, age = 23) {
  console.log(myName + ":" + age);
}
myInfo("sindhuja");

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("DO you have any permission?");
  }
}
let age = prompt("Enter Your age", 18);
if (checkAge(age)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

//function is a value
function myName() {
  //1 Create
  console.log("Sindhuja");
}
console.log(myName); // 2 copy

function myIntro() {
  console.log("Hi ! I'm Sindhuja Shankar");
}
let func = myIntro;
func();
myIntro();

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Are you Indian?",
  function () {
    console.log("yes I am");
  },
  function () {
    console.log("No I am not");
  }
);

//self Invoke function

(function () {
  console.log("This is self Invoke function");
})();

myInterest("FootBall");
function myInterest(sports) {
  console.log(`I love,${sports}`);
}

//Arrow function
let value = (number) => number + 2;
console.log(value(20));

let yourAge = prompt("Enter your age");
let criteria =
  yourAge < 18
    ? () => console.log(" you are eligible for voting")
    : () => console.log("You are not eligible for voting");
criteria();

//multiline arrow function
let divided = () => {
  let no1 = prompt("number 1");
  let no2 = prompt("number 2");
  let solution = no1 / no2;
  return solution;
};
console.log(divided());

let purchaseAmount = prompt("amount");
let welcome =
  purchaseAmount > 2000
    ? () => console.log("40 % discount")
    : () => console.log("No discount");
welcome();

const subject = ["tamil", "english", "maths", "physics", "chemistry"];
console.log(subject.map((subjects) => subjects.length));
