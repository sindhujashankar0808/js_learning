const personInfo = {
  name: "Sindhuja",
  age: 20,
  degree: "BE",
  branch: "Computer Science",
};
let json = JSON.stringify(personInfo);
console.log(json);
console.log(JSON.stringify(personInfo, null, 3));

// Excluing and transforming: replacer
// let variable = JSON.parse(JSON.stringify(value[, replacer, space]))
let user = {
  noOfUser: 2,
};
let userInfo = {
  userName: [{ nameOfUser: "Sindhuja" }, { nameOfUser: "sency" }],
  userDegree: "BE",
  userBranch: "Computer Science",
};
user.occupiedBy = userInfo;
console.log(
  JSON.stringify(userInfo, [
    "userName",
    "userDegree",
    "userBranch",
    "nameOfUser",
    "noOfUser",
  ])
);
console.log("..............................");

let room = {
  number: 23,
};
let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return key == "occupiedBy" ? undefined : value;
  })
);

// space
const person = {
  personName: "sindhuja",
  personAge: 20,
  personDegree: "BE",
  personBranch: "Computer Science",
};
console.log(JSON.stringify(person, null, 3));

//JSON.parse
/*syntax
let value = JSON.parse(str, [reviver]);*/
//stringyfied array
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);

console.log(numbers[1]);

//user reviver
// it returns all values "as is", but date will become a Date
let application = '{"college":"RTC", "date" : "2023-04-10T12:00:00.000Z"}';

let join = JSON.parse(application, function (key, value) {
  if (key === "date") return new Date(value);
  return value;
});
console.log(join.date.getDate());
