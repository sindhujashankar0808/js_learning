//technically it is regular function
//named with capital letter first
//should be execut with "new" operator

function User(userName) {
  this.name = userName;
  this.age = 28;
}
let user = new User("Sindhuja");
console.log(user.name);
console.log(user.age);

//new.target
function MyName(name) {
  if (!new.target) {
    return new MyName(name);
  }
  this.name = name;
}
let userName = MyName("Sindhuja");
console.log(userName.name);
