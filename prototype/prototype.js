const user = {
  name: "Amirtha",
  age: 21,
  set setName(value) {
    this.name = value;
  },
  get getName() {
    return this.name;
  },
};
const admin = {
  __proto__: user,
  isAdmin: "true",
};
console.log(admin);
//using prototype
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};
rabbit.__proto__ = animal;
//prototype reference
let animals = {
  eats: true,
};
let rabbits = {
  jumps: true,
};
rabbits.__proto__ = animals; // (*)
// we can find both properties in rabbit now
console.log(rabbits.eats); // true (**)
console.log(rabbits.jumps);
console.log("\n");
//method AUTOMATICALLY CALLING
let car = {
  color: "Black",
  model() {
    console.log("Maruti");
  },
};
let bike = {
  speed: 100,
};
bike.__proto__ = car; //this prototype called inherited
bike.model();
console.log("\n");
//prototype chainings
const fruits = {
  fruit: "Mango",
  taste() {
    console.log("Sweet");
  },
};
const apple = {
  color: "red",
  __proto__: fruits,
};
let grapes = {
  shape: "circle",
  __proto__: apple,
};
//taste in taken from prototype chain
grapes.taste(); //fruits taste
console.log(grapes.color); //red from apple
console.log("\n");
//without using prototype
let birds = {
  eats: true,
  fly() {
    //this method won't be used by parrot
  },
};
let parrot = {
  __proto__: birds,
};
parrot.fly = function () {
  console.log("parrot! look nice!");
};
parrot.fly();
console.log("\n");
//add a new property to constructor function
function Employee(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Employee.prototype.company = "Tartlabs";
let employee1 = new Employee("Amirtha", "Prakash");
let employee2 = new Employee("Lalith", "Prakash");
console.log(
  employee1.firstName +
    " " +
    employee1.lastName +
    " " +
    employee1.company +
    "\n"
);
console.log(
  employee2.firstName + " " + employee2.lastName + " " + employee2.company
);
//
