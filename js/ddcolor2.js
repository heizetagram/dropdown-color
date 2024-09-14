console.log("ddcolor2");

const colArray2 = [["red", "#ff0000"], ["green", "#00ff00"], ["yellow", "#ffff00"], ["purple", "#1f35a9"]];
const colorObjects = [{"name": "red", "id": "#ff0000"}, {"name": "green","id": "#00ff00"}, {"name": "yellow", "id": "#ffff00"}, {"name": "purple", "id": "#1f35a9"}];

const ddColor2 = document.getElementById("ddColor2");
const pbFillDropdown2 = document.getElementById("pbFillDropdown2");

function addColors2(btn) {
    ddColor2.innerHTML = "";
    colorObjects.forEach(fillDropdownObj);
}

// Use a two-dimensional array to retrieve value
function fillDropdown2(twoDimArray) {
    const el = document.createElement("option");
    el.textContent = twoDimArray[0];
    el.value = twoDimArray[1];
    ddColor2.appendChild(el);
}

// Use an object to retrieve value
function fillDropdownObj(colorObject) {
    const el = document.createElement("option");
    el.textContent = colorObject.name;
    el.value = colorObject.value;
    ddColor2.appendChild(el);
}

function setBackgroundColor2() {
    const selIndex= ddColor2.selectedIndex;
    const selOption = ddColor2.options[selIndex];
    bdy.style.backgroundColor = selOption.innerText;
}

pbFillDropdown2.addEventListener('click', addColors2);
ddColor2.addEventListener('change', setBackgroundColor2);