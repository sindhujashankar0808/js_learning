function sum(num) {
  if (typeof num !== "number") {
    return () => " The given numbers are invalid";
  }
  return function (num1) {
    if (typeof num1 !== "number") {
      return " The given numbers are invalid";
    }
    return num + num1;
  };
}
console.log(sum(10)(25));
console.log(sum("Hi")(10));
console.log(sum()());

//Tried
function add(number) {
  if (isNaN) {
    return () => " The given numbers are invalid";
  }
  return function (num1) {
    if (isFinite) {
      return " The given numbers are invalid";
    }
    return number + num1;
  };
}
console.log(add(10)(25));
console.log(add("Hi")(10));
console.log(add()());
