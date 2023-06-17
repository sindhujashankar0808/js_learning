// function myDetails(key,value) {
//   return {
//     key:
//     value:
//   };
// }

function info(key,value) {
  key = document.getElementById("key").value;
  value = document.getElementById("value").value;
  console.log(key, ":", value);
  //   console.log(value);
}
document.getElementById("output").innerHTML = info();

// const details = new Object();
// details.keyA = document.getElementById("key").value;
// details.valueB = document.getElementById("value").value;
// console.log(details.keyA, details.valueB);
