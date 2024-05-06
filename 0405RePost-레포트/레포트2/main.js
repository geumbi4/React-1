const body1 = document.querySelector("body");
const checkBox = document.querySelector("input");

function action() {
    body1.classList.toggle("dark-mode");
}

checkBox.addEventListener("change",action);