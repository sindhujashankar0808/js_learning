const testVar = null;
let value = testVar === null ? "I'm null" : testVar;
console.log(value);

const variable = null;
console.log(variable ?? "I'm null");
console.log(variable || "I'm null");
