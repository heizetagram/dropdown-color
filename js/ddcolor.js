console.log("jeg er i ddcolor");
const colorArray = ["red", "green", "yellow", "blue", "orange"];

const ddColor = document.getElementById("ddColor");
let bdy = document.querySelector("body");

function fillDropdown(color) {
    const el = document.createElement("option");
    el.textContent = color;

    ddColor.appendChild(el);
}

const pbFillDropdown = document.getElementById("pbFillDropdown");

function addColors(btn) {
    ddColor.innerHTML = "";
    colorArray.forEach(fillDropdown);
    console.log(document.all);
}

function setBackgroundColor() {
    const selIndex= ddColor.selectedIndex;
    const selOption = ddColor.options[selIndex];
    bdy.style.backgroundColor = selOption.innerText;
}

pbFillDropdown.addEventListener('click', addColors);
ddColor.addEventListener('change', setBackgroundColor);