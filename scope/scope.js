const user = {
  name: "John",
};
//Bolock Scope
{
  let myValue1 = 50;
  let myValue2 = 30;
  let myValue3 = 20;
  let mySolution = myValue1 + myValue2;
  console.log(mySolution);
}
//console.log(mySolution);   we can not access variables from outside

//Local Scope
//Within a js function

function myFunction() {
  let numOfBalls = 50;
  console.log(typeof numOfBalls);
}
myFunction();

//Global Scope
const studentName = "Sindhuja";

function myName() {
  console.log("This is my Name " + studentName);
}
myName();

for (let i = 0; i < 10; i++) {}

for (let i = 0; i < 12; i++) {}
