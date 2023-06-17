//new Map() – creates the map.
//map.set(key, value) – stores the value by the key
let names = new Map();
names.set(1, "Sindhuja");
names.set(2, "Jeevisha");
names.set(3, "Preethi");
console.log(names);
console.log(names.get(3)); //map.get(key) – returns the value by the key
console.log(names.get(4)); //undefined if key doesn’t exist in map.
console.log(names.size);
console.log(names.length); //undefined
console.log(names.has(1));
console.log(names.has(4));
console.log(names);
console.log(names.delete(2));
console.log(names);

//For looping over a map, there are 3 methods

let person = new Map([
  [26, "Sindhuja"],
  [8, "Sency"],
  [7, "Jeevisha"],
]);
for (let name of person.keys()) {
  console.log(name); //map.keys() – returns an iterable for keys,
}
for (let name of person.values()) {
  console.log(name); //map.values() – returns an iterable for values
}
for (let name of person.entries()) {
  console.log(name); //map.entries() – returns an iterable for entries
}

//Object.entries() : Map from Object
let obj = {
  user: "sindhuja",
  age: 20,
};
//     {
//         user : "Ismah",
//         age : 21
//     },
// ];
let users = new Map(Object.entries(obj));
console.log(users.get("user"));
console.log(users.get("age"));

//A Set is a special type collection – “set of values” (without keys)
