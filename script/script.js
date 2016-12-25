var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var form = popup.querySelector(".login-form");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var overlay = document.querySelector(".modal-overlay");
var modalMap = document.querySelector(".modal-content-map");
var linkMap = document.querySelector(".btn-map");
var closeMap = document.querySelector(".modal-map-close");
var savedLogin = localStorage.getItem("login");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show");
  if(savedLogin){
     login.value=savedLogin;
     password.focus();
  }else login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show");
});

linkMap.addEventListener("click", function(event) {
  event.preventDefault();
  modalMap.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show");
});

closeMap.addEventListener("click", function(event) {
  event.preventDefault();
  modalMap.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value){
    event.preventDefault();
    console.log("Введите логин и пароль!");
  }else {
    localStorage.setItem("login", login.value)
  }
});

var closePopups = function(){
  if (popup.classList.contains("modal-content-show")) {
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
  }
  if (modalMap.classList.contains("modal-content-show")) {
    modalMap.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
  }
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    closePopups();
  }
});

overlay.addEventListener("click", function(event){
  closePopups();
});
