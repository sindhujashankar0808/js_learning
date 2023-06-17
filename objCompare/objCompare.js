const fruitObj1 = { fruit: "a" };
const fruitObj2 = { fruit: "a" };
if (fruitObj1.fruit === fruitObj2.fruit) {
  console.log("Both object is same");
}

const fruitObj3 = { fruit: "a" };
const fruitObj4 = { fruit: "a" };
if (JSON.stringify(fruitObj3) === JSON.stringify(fruitObj4));
{
  console.log("Both are same");
}

const fruitObjA = { fruit: "a" };
const fruitObjB = { fruit: "a" };
if (fruitObjA ?? fruitObjB) {
  console.log("Both are same");
}
const fruitObjC = { fruit: "a" };
const fruitObjD = { fruit: "a" };
if (fruitObjC || fruitObjD) {
  console.log("Both are same");
}
