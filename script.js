const container = document.querySelector(".container");

createGrid();

const clearGridButton = document.querySelector("#clear");

clearGridButton.addEventListener("click", clearGrid)

function createGrid (sideLength) {
    if (!(sideLength > 0)) { // check that a valid side length is given
        sideLength = 16;
    } else if (sideLength > 100) { // set anything >100 to 100
        sideLength = 100;
    }

    container.style.gridTemplateColumns = `repeat(${sideLength}, auto)`;
    for (let i = 0; i < (sideLength ** 2); i++) {
        const div = document.createElement("div");
        div.classList.add("item");
        div.id = `div${i + 1}`;
        container.appendChild(div);
    }

    const items = document.querySelectorAll(".item")

    items.forEach(element => {
        element.addEventListener("mouseover", changeColor)
    });
}

function changeColor(e) {
    this.style.backgroundColor = "black";
}

function clearGrid() {
    container.innerHTML = "";
    createGrid(+prompt("How many squares per side? (max 100)"));
}

