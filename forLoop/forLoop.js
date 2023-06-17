// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "\n";
// }
// console.log(text);

// // While loop
// let index = prompt("Enter the number");
// let value = prompt("Enter the value");
// while (index <= value) {
//   console.log(index);
//   index++;
// }

// //do...while
// let myValue = 1;
// do {
//   console.log(myValue);
//   myValue++;
// } while (myValue < 8);

// //Breaking the loop
let addition = 0;
while (true) {
  let num = +prompt(" enter  the number");
  if (!num) break;
  addition += num;
}
console.log(addition);

//continue the loop
let myVal = 0;
for (myVal = 0; myVal < 10; myVal++) {
  if (myVal % 2 != 0) continue;
  console.log(myVal);
}

// Lable for Break and Continue
const numA = [1, 3, 5, 7, 9];
let txt = "";
value: {
  txt += numA[0];
  txt += numA[1];
  txt += numA[2];
  break value;
}
