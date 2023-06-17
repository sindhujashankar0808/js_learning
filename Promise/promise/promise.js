//async always returns a promise
async function now() {
  return 1;
}
console.log(now());
now().then(console.log);
//await
const reachV = new Promise((resolve, reject) => {
  const reached = true;
  if (reached) {
    setTimeout(resolve, 1000, "Jo reached");
  } else {
    reject("Jo not reached");
  }
});
async function asyncStatus() {
  try {
    console.log("hi");
    res = await reachV;
    console.log(res);
    console.log("bye");
  } catch (err) {
    console.log(err);
  }
}
asyncStatus();
// async function fun() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   } catch (err) {
//     console.log(err);
//   }
// }
// fun();
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((json) => console.log(json));
// // the execution: catch -> then
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
})
  .catch(function (error) {
    console.log("The error is handled, continue normally");
  })
  .then(() => console.log("Next"));
//Promise chaining
const x = new Promise((resolve, reject) => {
  console.log("Promise called");
  setTimeout(() => resolve("testing"), 2000);
});
x.then((x) => console.log("then1", x))
  .then((x) => console.log("then2", x))
  .then((x) => console.log("then3", x))
  .catch((x) => console.log("error", x))
  .then((x) => console.log("then4 catch", x))
  .then((x) => console.log("then5 catch", x))
  .then((x) => console.log("finally"));
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});
p.then((result) => {
  console.log(result);
  return result * 2;
}).then((result) => {
  console.log(result);
  return result * 3;
});
