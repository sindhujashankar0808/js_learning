function mainFunction(getcallfunction) {
  console.log("This is main function");
  getcallfunction();
}
function callbackFunction() {
  console.log("This is callback function");
}
mainFunction(callbackFunction);
