//for...in with string
const string = "sindhuja";
for (let i in string) {
  console.log(string[i]);
}
console.log("\n");

//Ordered Like an Object
const students = {
  2: "Sindhuja",
  4: "Jeevisha",
  1: "Preethi",
  3: "Bindhu",
};
for (let i in students) {
  console.log(i);
}
