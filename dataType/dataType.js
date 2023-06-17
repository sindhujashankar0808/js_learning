console.log("Number");
let number = 50.76;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));
console.log(Math.trunc(number));

// A primitive As an object

let person = "sindhuja";
let mark = 66.545;
console.log(Math.ceil(mark.toFixed(1)));
console.log(person.toUpperCase());
console.log(0xabbb);

//toString (base)

const num = 222;
console.log(num.toString(16));
console.log(num.toString(36));
console.log(9999999999999999);
console.log(isNaN(547));
console.log(isNaN("98"));

//partseInt and parseFloat

console.log(parseInt("5473.9787"));
console.log(parseFloat("5473.8765876"));

//Math Functions
console.log(Math.random());
console.log(Math.random());
console.log(Math.max(52, 45, 96, 65, 85));
console.log(Math.min(52, 45, 96, 65, 85));
console.log(Math.pow(5, 2));
console.log(".............................");
console.log("sindhuja".length);
console.log("sindhuja"[0].toUpperCase().slice(1));

const myName = "sindhuja was playing";
console.log(myName[0].toUpperCase() + myName.slice(1));
console.log(myName.indexOf("s", 3));

//includes, startsWith, endsWith
console.log("The day was good".includes("The"));

console.log("The day was good".includes("bad"));
console.log("The day was good".startsWith("The"));
console.log("The day was good".endsWith("The"));

//getting a substring
let personA = "Preethi";
console.log(person.slice(0, 4));
