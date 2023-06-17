//Object reference and copying
let user = " sindhuja";
let myName = user;
console.log(myName);
console.log("\n");

const student = { studentName: "Sindhuja" };
const admin = student; //copy the reference
admin.studentName = "Jeevisha"; //const objects can be modified
console.log(student.studentName); //the name sindhuja has changed jeevisha
console.log("\n");

//comparison by reference

let a = {};
let b = a;
console.log(a == b);
console.log(b == a);
console.log("\n");

//Cloning and merging, Object.assign
let user1 = {
  userName: "sindhuja",
  userAge: 21,
};
let clone = {}; //empty object
for (let i in user1) {
  clone[i] = user1[i];
}
clone.userName = "Preethi";
console.log(user1.userName);
console.log("\n");

//object assign
let person = { name: "Sindhuja" };
let personAge = { age: 21 };
let address = { place: "Ooty" };
Object.assign(person, personAge, address);
Object.assign(person, { name: "Jeevisha" });
console.log(person.name);
console.log(person.age);
console.log(person.place);

//nested cloning
let personA = {
  personName: "Sindhuja",
  personAge: 21,
  address: {
    place: "Ooty",
    district: "The Nilgiri's",
  },
};
let cloneOfPerson = Object.assign({}, personA);
console.log(personA.personAge === cloneOfPerson.personAge);
personA.personAge = 22;
console.log(personA.personAge);

//structuredClone
let info = {
  name: "Sindhuja",
  age: 22,
};
let copy = structuredClone(info);
console.log(info.name === copy.name);
info.name = "Preethi";
console.log(info.name);
