//we can not use this keyword directly into arrow function because
// it does not contain its own this
const employee = {
  salary: 10000,
  appraisal() {
    return this.salary + 5000; //we shouldn't use arrow functions to define an object method.
  },
};
console.log(employee.appraisal());
