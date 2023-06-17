const marksArray = [21, 85, 54, 69, 54];

const getNumberMath = () => {
  let max = marksArray[0];
  let min = marksArray[0];
  let total = marksArray[0];
  let avg = marksArray[0];

  for (let i = 1; i < marksArray.length; i++) {
    if (marksArray[i] > max) {
      max = marksArray[i];
    }
    if (marksArray[i] < min) {
      min = marksArray[i];
    }
    total = marksArray[i] + total;
    avg = total / marksArray.length;
    // if (marksArray[i] == marksArray[j]) count++;
    // if (frequentNumber < count) {
    //   frequentNumber = count;
    //   frequent = marksArray[i];
  }

  return {
    max,
    min,
    avg,
  };
};
console.log(getNumberMath());
function mostFrequent(marksArray) {
  let maxcount = 0;
  let frequentNumber;
  for (let i = 0; i < marksArray; i++) {
    let count = 0;
    for (let j = 0; j < marksArray; j++) {
      if (marksArray[i] == marksArray[j]) count++;
    }
    if (count > maxcount) {
      maxcount = count;
      frequentNumber = marksArray[i];
    }
  }
}
console.log(mostFrequent());


// const maxNumber = () => {
//   let maximum = marksArray[0];
//   for (let i = 1; i < marksArray.length; i++) {
//     if (marksArray[i] > maximum) {
//       maximum = marksArray[i];
//     }
//   }
// };
// const minNumber = () => {
//   let minimum = marksArray[0];
//   for (let i = 1; i < marksArray.length; i++) {
//     if (marksArray[i] > minimum) {
//       minimum = marksArray[i];
//     }
//   }
//   return {
//     minimum,
//   };
// };
// const avgNumber = () => {
//   for (let i = 1; i < marksArray.length; i++) {
//     total = marksArray[i] + total;
//     avgerage = total / marksArray.length;
//   }
//   return {
//     avgerage,
//   };
// };

// let minFrequentNo = 1;

// for (let i = 0; i < marksArray.length; i++){
//   for (let j = i; j < marksArray.length; j++){
//     if (marksArray[i] === marksArray[j]){
