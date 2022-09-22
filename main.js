const grid = document.createElement("div");
grid.className = "grid-container";
grid.id = "hello";
document.body.appendChild(grid);

let gridSize = 4;
let gridColumns = Array(gridSize).fill("1fr").join(" ");
document.querySelector(".grid-container").style["grid-template-columns"] = gridColumns;


for (let i = 1; i <= gridSize ** 2; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "grid-item";
    newDiv.id = `item${i}`;
    grid.appendChild(newDiv);
}

const blocks = document.querySelectorAll('.grid-item');
blocks.forEach((block) => {
    block.addEventListener('mouseover', () => changeColor(block.id, "black"));
});

function changeColor(id,color) {
    return document.querySelector(`#${id}`).style.backgroundColor = color;
}