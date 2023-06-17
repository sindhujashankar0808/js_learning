(function () {
  var todo = document.querySelector("#todolist"),
    form = document.querySelector("form"),
    field = document.querySelector("#newitem");

  form.addEventListener(
    "submit",
    function (ev) {
      var text = field.value;
      if (text !== "") {
        todo.innerHTML +=
          "<li>" +
          text +
          ' <button onclick="Delete(this);">Delete</button> </li>';
        field.value = "";
        //field.focus();
      }
      ev.preventDefault();
    },
    false
  );
})();
function Delete(currentEl) {
  currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
}
