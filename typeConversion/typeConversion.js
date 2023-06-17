//string type conversion
//Number to String
"use strict";
let myValue = 21;
console.log(typeof myValue);
myValue = String(myValue);
console.log(typeof myValue);
console.log(String(myValue));
console.log(Boolean(myValue));
console.log("\n");

//number type conversion
//String to Number
let myName = "sindhuja";
console.log(typeof myName);
myName = Number(myName);
console.log(typeof myName);
console.log("\n");

//Unary + operator
let myNumber = "21";
console.log(typeof myNumber);
let myNumber1 = +myNumber;
console.log(typeof myNumber1);
console.log("\n");

//Dates to Number
let today = new Date(); //Object
console.log(typeof today);
today = Number(Date());
console.log(typeof today);
console.log(Number(today));
console.log("\n");

//Number to Date
let num = 27;
console.log(typeof num);
num = new Date(num);
console.log(typeof num);
