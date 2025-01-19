document.addEventListener('DOMContentLoaded', () => {
    // Select the container
    const container = document.getElementById('grid-container');

    // Initial grid size
    let gridSize = 16;

    // Function to generate the grid
    function createGrid(size) {
        container.innerHTML = ''; // Clear the existing grid

        // Set up the container for a grid layout
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.width = '400px';
        container.style.height = '400px';
        container.style.border = '1px solid blue';
        container.style.backgroundColor = '#d3d3d3';

        // Generate the grid cells
        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement('div');
            cell.style.flex = `0 0 ${100 / size}%`; // Flex-basis for size columns
            cell.style.height = `${400 / size}px`; // Calculate cell height
            cell.style.boxSizing = 'border-box';
            cell.style.border = '1px solid rgba(0, 0, 0, 0.1)'; // Optional: light borders

            // Add hover effect
            cell.addEventListener('mouseenter', () => {
                cell.style.backgroundColor = 'grey';
            });

            container.appendChild(cell);
        }
    }

    // Initial grid creation
    createGrid(gridSize);

    // Add event listener for resizing the grid
    document.getElementById('resizeButton').addEventListener('click', () => {
        let newSize = prompt("Enter the new grid size (e.g., 16 for 16x16, max 100):", "16");
        if (newSize !== null) {
            newSize = parseInt(newSize, 10);
            if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
                createGrid(newSize);
            } else {
                alert("Please enter a valid positive number between 1 and 100.");
            }
        }
    });

    // Add event listener to reset the grid
    document.getElementById('resetButton').addEventListener('click', () => {
        location.reload();
    });
});



