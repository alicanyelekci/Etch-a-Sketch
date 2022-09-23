let gridColumns;
let gridSize;
const btn = document.querySelector("button");
const grid = document.createElement("div");
grid.className = "grid-container";
grid.id = "hello";
document.body.appendChild(grid);

generateGrid();

btn.addEventListener("click", () => {
    removeGrid(),
    generateGrid()
});

function generateGrid() {
    gridSize = document.querySelector("input").value;
    gridColumns = Array(parseInt(gridSize)).fill("1fr").join(" ");
    document.querySelector(".grid-container").style["grid-template-columns"] = gridColumns;

    for (let i = 1; i <= gridSize ** 2; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.id = `item${i}`;
        grid.appendChild(newDiv);
    }
    
    const blocks = document.querySelectorAll('.grid-item');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => paint(block.id, "black"));
    });
}

function removeGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.remove());
}

function paint(id,color) {
    return document.querySelector(`#${id}`).style.backgroundColor = color;
}