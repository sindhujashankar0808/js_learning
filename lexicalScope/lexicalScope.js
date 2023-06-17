let  noOfStudents= 80;
let lexicalScope = function (){
     let present = 54;
     let absent = noOfStudents - present;
     return absent;
}
console.log(lexicalScope());