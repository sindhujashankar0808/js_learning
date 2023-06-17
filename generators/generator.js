function* generatorSequence() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}
let generator = generatorSequence();
// // console.log(generator);
// //We can loop over their values using for..of
// for (let value of generator) {
//   console.log(value);
// }

//main method of generator is next().

let one = generator.next();
let two = generator.next();
let three = generator.next();
let four = generator.next();
let five = generator.next();
console.log(JSON.stringify(one));
console.log(JSON.stringify(two));
console.log(JSON.stringify(three));
console.log(JSON.stringify(four));
console.log(JSON.stringify(five));

//can get spread syntax ...
let sequence = [0, ...generatorSequence()];
console.log(sequence);

let j = 0;
function regularFunction() {
  for (let i = 0; i < 10; i++) {
    console.log(j);
    j++;
  }
}
regularFunction();
regularFunction();
regularFunction();
