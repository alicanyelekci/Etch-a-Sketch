const grid = document.createElement("div");
grid.className = "grid-container";
grid.id = "hello";
document.body.appendChild(grid);

let gridSize = 4;
let gridColumns = "";
// let gridContainer = document.querySelector(".grid-container").style["grid-template-columns"] = "1fr 1fr";

for (let i = 1; i <= gridSize; i++) {
    if (i === gridSize) {
        gridColumns += "1fr";
    }
    else {
        gridColumns += "1fr" + " ";
    }
}

document.querySelector(".grid-container").style["grid-template-columns"] = gridColumns;
// gridColumns -= " "; 


for (let i = 1; i <= gridSize ** 2; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "grid-item";
    newDiv.id = `item${i}`;
    grid.appendChild(newDiv);
}

// const gridStyle = document.querySelector(".grid-container");
// const style = getComputedStyle(gridStyle);
// style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
// gridStyle.style.setProperty("grid-template-columns", "1fr 1fr 1fr 1fr");
// document.getElementsByClassName("grid-item").backgroundColor = "blue";



// function gridStyle() {
//     document.getElementById('hello').style["display"] = "grid";
// } 

const blocks = document.querySelectorAll('.grid-item');
blocks.forEach((block) => {
    block.addEventListener('mouseover', () => changeColor(block.id, "black"));
});

function changeColor(id,color) {
    return document.querySelector(`#${id}`).style.backgroundColor = color;
}