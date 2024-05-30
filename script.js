const gridContainer = document.querySelector(".grid_container");
gridContainer.classList.add("gridContainer");

const size = prompt("What size is your grid going to be, mate?");

function createGrid() {
    if (size > 0 && size <= 100) {
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            let cellSize = ((640 / size) - 2) + "px";
            cell.style.height = cellSize;
            cell.style.width = cellSize;
            gridContainer.appendChild(cell);
        }}
    } else if (size > 100){
        alert("You can't have over 100 lad.")
    } else {
        alert("You need to enter a number between 1 and 100")
    }
}

createGrid()