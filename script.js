const gridContainer = document.querySelector(".grid_container");

const cell = document.createElement("div");
cell.classList.add("cell");

let size = 16;
    rows = size;
    columns = size;
    cellSize = (640 / size) + "px";

    cell.style.height = cellSize;
    cell.style.width = cellSize;

    console.log(cell.style.height);
    console.log(cell.style.width);

function createGrid() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            gridContainer.appendChild(cell);
        }
    }
}

createGrid()