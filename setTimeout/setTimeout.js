function intro() {
  console.log("I'm Sindhuja Shankar");
}
setTimeout(intro, 1000);
console.log("this is setTimeout() method ");

function myFunction() {
  console.log("hello");
}
let timeSpace = setTimeout(myFunction, 2000);
console.log(
  "setTimeout is used to show the message after which the function is executed"
);
const  listOfUsers= () => {
  let names = ["sindhuja", "jeevisha", "shanthini", "amirtha", "jency"];
  console.log(names);
}
setTimeout(listOfUsers, 2000);
console.log("name of the users");

// function showTime() {
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
// }
// let timeOut = setTimeout(showTime, 3000);

// clearTimeout(timeOut);

// program to stop the setTimeout() method
let count = 0;
const  increaseCount = () => {
  // increasing the count by 1
  count += 1;
  console.log(count);
}

let id = setTimeout(increaseCount, 3000);

// clearTimeout
clearTimeout(id);
console.log("setTimeout is stopped.");

//we can also pass parameters here
function myName(firstName, lastName) {
  console.log(`I'm ${firstName} ${lastName}`);
}
setTimeout(myName, 2000, "sindhuja", "Shankar");
