const btn = document.querySelector("#btn");
const modal = document.querySelector("#modal_parent");
const closeModal = document.querySelector("#close");
const title = document.querySelector("#title_modal");

// --------------------------------------------------------------------
// Обрабочик наведения на кнопку button
function titlehover() {
    title.style.cssText = "color: red; transform: scale(2s)";
}

function titlehover2() {
    title.style.cssText = "color: black; transform: scale(2s)";
}

btn.addEventListener("mouseenter", titlehover);
btn.addEventListener("mouseleave", titlehover2);

// ---------------------------------------------------------------------
// Оброботчик открытие и закрыте модального окна
function show() {
    modal.style.display = "block";
}

function exit() {
    modal.style.display = "none";
}

btn.addEventListener("click", show);
closeModal.addEventListener("click", exit);
