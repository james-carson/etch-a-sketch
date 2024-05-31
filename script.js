// Set the grid container and add it to the class list
const gridContainer = document.querySelector(".grid_container");
gridContainer.classList.add("gridContainer");

// Allow the user to choose the grid size
const size = prompt("What size is your grid going to be, mate? Enter a number between 1 and 100:");

// Function to create the grid
function createGrid() {
    if (size > 0 && size <= 100) {
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                let cellSize = ((580 / size) - 2) + "px";
                cell.style.height = cellSize;
                cell.style.width = cellSize;
                gridContainer.appendChild(cell);

                let drawing = false;

                gridContainer.addEventListener("mousedown", () => {
                    drawing = true;
                });
                gridContainer.addEventListener("mouseup", () => {
                    drawing = false;
                });

                gridContainer.addEventListener("mouseover", (event) => {
                    if (drawing && event.target.classList.contains("cell")) {
                        event.target.style.backgroundColor = "darkgrey";
                    }
                });

            }
        }
    } else if (size > 100){
        alert("You can't have over 100, lad.")
    } else {
        alert("I SAID you need to enter a number between 1 and 100")
    }
}

createGrid()

// Allow the user to colour in a section with a click. Needs to be able to drag over to another.





// Attempt at just mousedown:

// let mouseDownCell = false;
            // let mouseOverCell = false;
            // cell.addEventListener("mouseover", () => {
            //     cell.style.backgroundColor = "darkgrey";
            // })


// This isn't working yet - doesn't need mousedown to be true to draw---

            // let drawing = false;
            // cell.addEventListener("mousedown", () => {drawing = true})
            // cell.addEventListener("mouseup", () => {drawing = false})
            // cell.addEventListener("mouseover", () => {
            //     if (drawing) {
            //         cell.style.backgroundColor = "darkgrey";
            //     } else {
            //         cell.style.backgroundColor = "";
            //     }})