//using an Object Literals
const stateAndCapital = {
  tamilNadu: "Chennai",
  kerala: "Trivandram",
  maharashra: "Mumbai",
};
console.log(stateAndCapital.tamilNadu);
console.log(stateAndCapital.kerala);
console.log(stateAndCapital.maharashra);
console.log("\n");
//console.log(Object.values(stateAndCapital));

//Key word new
const priceOfProduct = new Object();
priceOfProduct.pencil = 10;
priceOfProduct.note = 40;
priceOfProduct.pen = 10;
console.log(priceOfProduct.pen);
console.log(priceOfProduct.pencil);
console.log(priceOfProduct.note);
console.log("\n");
l;

//Object are mutable
const user = {
  name: "Sindhuja",
  age: 20,
  degree: "BE",
  department: "CSE",
};
const update = user;
update.age = prompt(user.age);
console.log(user.name);
console.log(user.age, "updated successfully");
console.log(user.degree);
console.log(user.department);
console.log("\n");

//Properties
//Accssing javascript properties
const person = {
  nameOfPerson: "Bindhu",
  ageOfPerson: 18,
  branch: "CDF",
};
person.work = "Developer"; //Adding New Property

console.log(person.nameOfPerson); //objectName.property
console.log(person["branch"]); //objectName[property]
console.log(person["ageOfPerson"]);
console.log(person.work);
console.log("\n");

//for...in Loop
//for...in statement loops through the properties of an object.
const vehicles = {};
vehicles.carA = "BMW";
vehicles.carB = "Ford";
vehicles.carC = "Volvo";
vehicles["this carD"] = "Fort";
let messege = "";
for (let x in vehicles) {
  messege += x + " ";
}
delete vehicles.carB; //deleting the vehicle
console.log(messege);
console.log("\n");

//nested Object
const detailsOfUser = {
  userName: "Sindhuja",
  userAge: "20",
  userSkills: {
    skill1: "Sports",
    skill2: "Dance",
    skill3: "Poem Writting",
  },
  //nested Array Object
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat" },
  ],
};
let details = "";
for (let i in detailsOfUser.cars) {
  details += "\n" + detailsOfUser.cars[i].name + "\n\n";
  for (let j in detailsOfUser.cars[i].models) {
    details += detailsOfUser.cars[i].models[j] + "\n";
  }
}

console.log(detailsOfUser.userName);
console.log(detailsOfUser.userAge);
console.log(details);
console.log("\n");

//Adding Method to an object
const personC = {
  firstName: "Sindhuja",
  lastName: "Shankar",
  ageOfPersonC: "21",
};
personC.name = function () {
  return (personC.firstName + " " + personC.lastName).toUpperCase(); // Using Built-In methods
};
console.log(JSON.stringify(personC.name())); //JSON.stringify
console.log("\n");

let today = new Date();
console.log(JSON.stringify(today));
console.log("\n");

//Computed properties
let fruit = prompt("Which fruit do you want?", "apple");
let box = {
  [fruit]: 10, // the name of the property is taken from the variable fruit
};
alert(box.apple);

//Property value Shorthand
function myInfo(myName, myAge) {
  return {
    myName,
    myAge,
  };
}
let myDetails = myInfo("Sindhuja", 20);
console.log("myName" in myDetails); //true, myAge exists in myDetails
console.log("myAge" in myDetails);
