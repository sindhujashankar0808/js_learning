// // //get 
// // (fetch('https://c0b82cc4-bc73-43cb-94e9-905b78f430a1.mock.pstmn.io'))
// // .then((res) =>( res.json()))
// // .then((message) => console.log(message.firstName,message.lastName))
// // .catch((err) => (err))


// // //let promise = fetch (url, [options])
// // "use strict";
// // (async () => {
// // let url = 'https://c0b82cc4-bc73-43cb-94e9-905b78f430a1.mock.pstmn.io';
// // let response = await fetch (url);
// // let commits = await response.json();

// // console.log(commits.firstName + ' ' + commits.lastName);
// // })();

// // //text formmat
// // (async () => {
// //     let response = await fetch("https://c0b82cc4-bc73-43cb-94e9-905b78f430a1.mock.pstmn.io")
// //   let text = await response.text();
// //   console.log(text);
// // })()

// // //blob
// // "use strict";
// // (async() => {
// // let response = await fetch ('https://c0b82cc4-bc73-43cb-94e9-905b78f430a1.mock.pstmn.io')
// // let blob = await response.blob();
// // let img = document.createElement('img');
// // // img.style = 'position:fixed;top:10px;left:10px;width:100px';
// // document.body.append(img);
// // img.src = URL.createObjectURL(blob)
// // setTimeout(() => {
// //     img.remove();
// //     URL.revokeObjectURL(img.src)
// // },2000);
// // })()

// //Respone header 
// 'use strict';                    

(async() => {
const user = {
    firstName : 'Sindhuja', 
    lastName : 'Shankar',
    email: "shan8@gmail.com"
};

    let response = await fetch('https://dummyapi.io/data/v1/user/create',{
    method : "POST",
    headers : {
        "Content-Type": "application/json",
        "app-id": "6461ba68584b0c523fac7a75"
    },
    body : JSON.stringify(user)
});
let result = await response.json();
console.log(result.firstName);

})()
