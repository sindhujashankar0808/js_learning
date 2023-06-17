const user = {
  fname: "Sindhuja",
  lname: "Shankar",
  age: 20,
  cars: [
    { name: "Swift", Model: ["Focus", "Mustang"] },
    { name: "BMW", Model: ["Focus", "Mustang"] },
  ],
};
let txt = ``;
for (let i in user.cars) {
  txt += `${user.cars[i].name + "\n"}`;

  for (let j in user.cars[i].Model) {
    txt += ` ${user.cars[i].Model[j]} \n`;
  }
}
console.log(user.fname);
console.log(txt);
