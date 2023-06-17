//cookies
//enhace user experience
//can access previous tab info
document.cookie = "name = Sindhuja";
expires = "new Date(2023,04,10)";
document.cookie = "name1 = Sency";

//local Storage
localStorage.setItem("name", "sindhuja");
console.log(localStorage.setItem);
localStorage.setItem("name1", "amirthuuu");
console.log(localStorage.setItem);
console.log(localStorage.getItem("name"));
localStorage.removeItem("name1", "amirthuuu");
// localStorage.clear();

//session storage
sessionStorage.setItem("name", "sindhuja");
