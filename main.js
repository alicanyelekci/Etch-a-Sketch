let gridColumns;
let gridSize;
let color = "black";
const slideSize = document.querySelector(".slider");
const btnClear = document.getElementById('clear');
const btnDelete = document.getElementById('delete');
const btnBlack = document.getElementById('black-color');
const btnPick = document.getElementById('pick-color');
const grid = document.createElement("div");
const sizeDiv = document.getElementById("size-label");


grid.className = "grid-container";
document.body.appendChild(grid);

generateGrid();

slideSize.addEventListener("click", () => removeGrid());

btnClear.addEventListener("click", () => removeGrid());

btnBlack.addEventListener("click", () => {
    color = "black";
    draw(blocks, color);
});

btnPick.addEventListener("click", () => {
    color = document.querySelector("#colorpicker").value;
    draw(blocks, color);
});

btnDelete.addEventListener("click", () => {
    color = "#FEF1B7";
    draw(blocks, color);
});

slideSize.addEventListener("input", () => {
    let gridSize = slideSize.value;
    sizeDiv.innerText = `${gridSize} x ${gridSize}`;
});

function generateGrid() {
    gridSize = document.querySelector(".grid-size-slider input").value;
    sizeDiv.innerText = `${gridSize} x ${gridSize}`;
    gridColumns = Array(parseInt(gridSize)).fill("1fr").join(" ");
    document.querySelector(".grid-container").style["grid-template-columns"] = gridColumns;

    for (let i = 1; i <= gridSize ** 2; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.id = `item${i}`;
        grid.appendChild(newDiv);
    }
    
    blocks = document.querySelectorAll('.grid-item');
    draw(blocks, color);
}

function removeGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.remove());
    color = "black";
    generateGrid();
}

function draw(blocks, color) {
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => paint(block.id, color));
    });
}

function paint(id,color) {
    return document.querySelector(`#${id}`).style.backgroundColor = color;
}