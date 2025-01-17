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


});