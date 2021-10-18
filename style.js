let modal = document.getElementById('modal-register');
let btn_register = document.getElementById('btn-register');
let btn_overlay = document.getElementById('modal-overlay');
btn_register.addEventListener("click", function(){
modal.style.display = "flex"
});
btn_overlay.addEventListener("click", function(){
modal.style.display = "none"
});