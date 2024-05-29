const gridContainer = document.querySelector(".grid_container");
gridContainer.classList.add("gridContainer")

const cell = document.createElement("div");
cell.classList.add("cell");

let size = 16;
    rows = size;
    columns = size;
    cellSize = (640 / size) + "px";

function createGrid() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            cell.style.height = cellSize;
            cell.style.width = cellSize;

            gridContainer.appendChild(cell);
        }
    }
}

createGrid()