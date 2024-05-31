// Set the grid container and add it to the class list
const gridContainer = document.querySelector(".grid_container");
gridContainer.classList.add("gridContainer");

// Allow the user to choose the grid size
let size = parseInt(prompt("What size is your grid going to be, mate? Enter a number between 1 and 100:"));

//Adding event listener handlers for the grid to look for clicks and drags
let drawing;
function mouseDownHandler() {
    drawing = true;
}
function mouseUpHandler() {
    drawing = false;
}
function clickHandler(clickEvent) {
    if (clickEvent.target.classList.contains("cell")) {
        clickEvent.target.style.backgroundColor = "darkgrey";
    }
}
function mouseOverHandler(clickDrag) {
    if (drawing && clickDrag.target.classList.contains("cell")) {
        clickDrag.target.style.backgroundColor = "darkgrey";
    }
}

// Function to create the grid
function createGrid(gridSize) {
    if (gridSize > 0 && gridSize <= 100) {
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                let cellSize = ((580 / gridSize) - 2) + "px";
                cell.style.height = cellSize;
                cell.style.width = cellSize;

                gridContainer.appendChild(cell);

                gridContainer.addEventListener("mousedown", mouseDownHandler);
                gridContainer.addEventListener("mouseup", mouseUpHandler);
                gridContainer.addEventListener("mouseover", mouseOverHandler);
                gridContainer.addEventListener("click", clickHandler);
            }
        }
        alert("Click to colour!")
    } else if (size > 100){
        alert("You can't have over 100, lad.")
    } else {
        alert("I SAID you need to enter a number between 1 and 100")
    }
}

createGrid(size)

const resizeGridButton = document.querySelector(".resize_button");
resizeGridButton.classList.add("resizeGridButton");

const resetGridButton = document.querySelector(".reset_button");
resetGridButton.classList.add("resetGridButton");

function removeGrid() {
    gridContainer.removeEventListener("mousedown", mouseDownHandler);
    gridContainer.removeEventListener("mouseup", mouseUpHandler);
    gridContainer.removeEventListener("mouseover", mouseOverHandler);
    gridContainer.removeEventListener("mouseover", clickHandler);

    let cells = gridContainer.childNodes;
    while (cells.length > 0) {
        let cell = cells[0];
        if (cell.classList.contains("cell")) {
            gridContainer.removeChild(cell);
        }
    }
}

resizeGridButton.addEventListener("click", () => {
    removeGrid()
    let size = parseInt(prompt("What size is your grid going to be, mate? Enter a number between 1 and 100:"));
    createGrid(size)
    })

    resetGridButton.addEventListener("click", () => {
        let cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.style.backgroundColor = '';
        });
    });
    