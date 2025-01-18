document.addEventListener('DOMContentLoaded', () => {
    // Select the container
    const container = document.getElementById('grid-container');

    // Define the grid size (16x16)
    const gridSize = 16;

    // Set the container styles for grid layout
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '400px'; // Ensure consistent size with CSS
    container.style.height = '400px';
    container.style.border = '1px solid blue';
    container.style.backgroundColor = '#d3d3d3';

    // Generate the grid cells
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.style.flex = `0 0 ${100 / gridSize}%`; // Flex-basis for 16 columns
        cell.style.height = `${400 / gridSize}px`; // Calculate cell height
        cell.style.boxSizing = 'border-box';
        cell.style.border = '1px solid rgba(0, 0, 0, 0.1)'; // Optional: light borders
        
        //Set hover function
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'grey';
        });
        
        container.appendChild(cell);
    }

    document.getElementById('resizeButton').addEventListener('click', () => {
        let gridSize = prompt("Enter the new grid size (e.g., 16 for 16x16, max 100):", "16");
        if (gridSize !== null) {
            gridSize = parseInt(gridSize, 10);
            if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
                createGrid(gridSize);
            } else {
                alert("Please enter a valid positive number between 1 and 100.");
            }
        }
    });
    
    function createGrid(size) {
        const container = document.getElementById('gridContainer');
        container.innerHTML = ''; // Clear the existing grid
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement('div');
            cell.classList.add('gridCell');
            container.appendChild(cell);
        }
    }

});


