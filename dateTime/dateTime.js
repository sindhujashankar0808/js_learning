let today = new Date()
console.log(today);
let now = Date.prototype.getDate;
console.log(now);
console.log(typeof(today));
console.log(typeof(now));
console.log(today.getDay());
console.log(today.setHours(1));
// let [month, date , year] = new Date();
// toLocaleDateString("en-US").split("/")
// console.log(month, date, year);
// let day = Date.now();
// toLocaleDateString("en-US").split("/")
// console.log(day);
let myDay = Date.parse();
console.log(myDay);



function Student(){
this.name = 'sindhuja';
    this.gender = 'F';
}

Student.prototype.age = 15;

var studObj1 = new Student();
console.log(studObj1.age); // 15

var studObj2 = new Student();
console.log(studObj2.age); // 15

let date =  new Date();
const todayDate = document.querySelector('.date');
const todayDay = document.querySelector('.day');
const todayTime = document.querySelector('.time');
const noOfDays = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
function showDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    todayDate.innerHTML = day + '/' + month + '/' + year
}
showDate()

function showDay() {
    let day = new Date();
    let today = day.getDay();
let days = noOfDays[today];
    todayDay.innerHTML = days
}
showDay()

function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let period  = "PM";
    if (hour == 0){
        hour = 12; 
    }
    if (hour > 12){
        hour = hour - 12;
        period = "PM";
    }
    if (hour < 10){
        hour = "0" + hour;
    }
    if (min < 10 ){
        min = "0" + min;
    }
    if (sec < 10 ){
        sec = "0" + sec;
    }
    // let todaystime = ; 
    let time =  `${hour} : ${min} : ${sec}  ${period}`
    document.querySelector(".time").innerHTML = time; 
    setTimeout(showTime,1000)
}
showTime()
