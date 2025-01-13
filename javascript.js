//Create a 16x16 grid of square divs

const container = document.querySelector(".container");
function makeGrid() {
    for (i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        row.textContent = i;

        for (j = 0; j < 16; j++) {
            const col = document.createElement("div");
            col.className = "col";
            row.appendChild(col);
            col.textContent = j;
        }
    }    
}
makeGrid();