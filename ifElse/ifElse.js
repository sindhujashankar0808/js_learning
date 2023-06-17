"use strict";
let myAge = prompt("Enter your age");

if (myAge > 18) {
  console.log("You are eligible for voting");
} else {
  console.log("You are not eligible for voting");
}

let year = prompt("Enter the year:");
if (year % 4 == 0) {
  console.log("you are right! It's Leap Year");
} else {
  console.log("Oops! It's Not Leap Year");
}

// multiple ?
let numberOfFruits = prompt("Enter the number Of Fruits");
let message =
  numberOfFruits < 3
    ? "I can eat"
    : numberOfFruits < 10
    ? "I can try to eat"
    : numberOfFruits < 20
    ? "I can not eat"
    : "Large amount of fruits";
console.log(message);

// Non-traditional use of '?'
let capital = prompt("Enter the capital of india");
capital == "Delhi" ? console.log("Right") : console.log("Wrong");

//Nullish ?? operator
let number1; //if number1 is defined, then number1

console.log(number1 ?? "number2"); //if number1 is undefined, then number2

//comparison with || operator
//The OR || operator can be used in the same way as ??
let firstName = null;
let lastName = null;
let nickName = "Ismah";
console.log(firstName || lastName || nickName || "Anonymous"); // Ismah

//differnce
let value = 20;
console.log(value ?? 100);
console.log(value || 100); //20
