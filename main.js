const board = document.querySelector("#board");
const colors = ['#3b89e7', '#00adf7', '#00cbe4', '#00e2b8', '#92f28a', '#f9f871', '#846dc0', '#9a5491'];
const SQUARES_NUMBER = 1500;

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        setColor(square)
    });
    square.addEventListener("mouseleave", () => {
        removeColor(square);
    });
    

    board.append(square);
}

function setColor(e) {
    const color = getColors();
    e.style.background = color;
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
    e.style.background = '#1d1d1d';
    e.style.boxShadow = '0 0 2px #000';
}

function getColors() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index];
}