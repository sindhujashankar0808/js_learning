//Array replacement
const names = ["Sindhuja", "Sency", "Amirtha", "Jeevisha"];
names[0] = "Preethi";
console.log(names);
console.log(names.length);

//remove the last element
console.log(names.pop());

//add new item end of the array
console.log(names.push());
//array.splice(index, howMany,item1,...,itemX)
console.log(names.splice());
names.forEach(console.log);
names.forEach((item, index, array) => {
  console.log(item, index, array);
});
console.log("------------------------------------------------");

//mix Of values
let array = [
  "Sindhuja",
  { place: "ooty" },
  function () {
    console.log("Hello");
  },
];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

//get element with "at"
let collegeName = ["RTC", "PSG", "SSN"];
console.log(collegeName[collegeName.length - 1]);
console.log(collegeName.at(-2));
console.log(collegeName.at(2));

//shift() removes the first element
console.log(collegeName.shift());

//shift() returns the removed element
document.getElementById("removedElement").innerHTML = collegeName.shift();

//unshift() add new item to the beginning of the array
console.log(collegeName.unshift());
console.log("------------------------------------------------");

const states = ["TamilNadu", "Kerala", "Karnateka", "Maharashtra"];
console.log(states.pop());

let district = ["chennai"];
let districts = district;
console.log(district == districts);
districts.push("Nilgiri's");
console.log(district);
console.log(districts);
console.log("------------------------------------------------");

//forEach
//arr.forEach(function(item, index, array)
let fruits = ["Apple", "Orange", "Apple", "mango"];

console.log(fruits.indexOf("Apple"));
console.log(fruits.lastIndexOf("Apple"));

//indexof, lastIndexOf , includes
let arr = [1, 0, false, 1];

//indexof returns position of the specified value
console.log(arr.indexOf(0));
//indexof returns -1 if the value is not found
console.log(arr.indexOf(null)); //-1
console.log(arr.indexOf(false)); // 2

//include return true if an array contains the specified value
//array.includes(element,start)
console.log(arr.includes(1));
//returns the last index
console.log(arr.lastIndexOf(1));

//find and findIndex/findLastIndex
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" },
  { id: 3, name: "Mary" },
];
let user = users.find((index) => index.id == 2);
console.log(user.name);

//filter
const age = [12, 54, 52, 85, 44, 16, 80];
const checkAdultUser = (age) => {
  return age >= 18;
};
console.log(age.filter(checkAdultUser));
document.getElementById("age").innerHTML = age.filter(checkAdultUser);

//sort()

const numbers = [5, 9, 45, 12, 63, 23, 32];
let result = numbers.reduce((sum, current) => sum + current, 100); //reduce
let solution = numbers.reduceRight((sum, current) => sum + current);
console.log(numbers.sort());
console.log(numbers.reverse());
console.log(result);
console.log(solution);

//split and join
let namesB = "sindhuja, jency, amirtha";
let userA = namesB.split(", ");
for (let names of userA) {
  console.log(`${names} was a student`);
}

//flat() concate sub array elements
const alphabets = [
  ["a", "b", "c"],
  ["a", "b", "d"],
  ["a", "f", "g"],
];
const oneDiamentionalArray = alphabets.flat();
console.log(oneDiamentionalArray);
const count = alphabets.flat().reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) accumulator[currentValue]++;
  else accumulator[currentValue] = 1;
  return accumulator;
}, {});
console.log(count);

//map
const number = [10, 20, 30];
number[3] = 40;
const newArray = number.map((x) => x * 10);
console.log(newArray);
console.log(number);
