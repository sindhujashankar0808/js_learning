const users = [
  {
    name: "Sindhuja",
    degree: "CSE",
    address: {
      place: "Ooty",
    },
  },
  {
    name: "Jeevisha",
    address: {
      place: "Coimbatore",
    },
  },
  {
    name: "Preethi",
    degree: "ECE",
  },
  {
    name: "Bindhu",
  },
];

for (let i = 0; i < users.length; i++) {
  //const details = users.
  console.log(users[i]?.name);
  console.log(users[i]?.degree);
  console.log(users[i].address?.place);
}
