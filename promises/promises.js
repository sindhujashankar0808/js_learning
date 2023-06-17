const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("success");
  }, 1000);

  setTimeout(() => {
    reject("failure");
  }, 1000);
});
promise.then(console.log).catch(console.log);

// const promiseA = new Promise()
//     function(resolve, reject) {  //executer function
//         setTimeout(() => {
//             resolve("success");
//     },1000)
// }

const bookingTrainTicket = new Promise((resolve, reject) => {
  let bookingSuccess = fail;
  if (bookingSuccess) resolve(1000);
  else reject();
});
bookingTrainTicket
  .then((amount) => console.log(`Booking success! I have Transefer ${amount}`))
  .catch(() => console.log("Booking failure"));
// function success() {
//   console.log("Booking success");
// }
// function failure() {
//   console.log("Booking failure");
// }
