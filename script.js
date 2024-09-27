// Function to initialize the gallery and add event listeners
function initializeGallery() {
    const figures = document.querySelectorAll('figure');

    // Loop through each figure and add event listeners
    figures.forEach((figure, index) => {
        // Add onmouseover and onmouseleave
        figure.addEventListener('mouseover', () => {
            figure.style.borderColor = "blue";
            console.log(`Mouse over on image ${index + 1}`);
        });
        figure.addEventListener('mouseleave', () => {
            figure.style.borderColor = "#ccc";
        });

        // Add onfocus and onblur for keyboard interaction
        figure.addEventListener('focus', () => {
            figure.style.borderColor = "green";
            console.log(`Focus on image ${index + 1}`);
        });
        figure.addEventListener('blur', () => {
            figure.style.borderColor = "#ccc";
        });

        // Dynamically add tabindex
        figure.setAttribute('tabindex', index + 1);
    });

    console.log("Gallery initialized");
}

// Adding the onload event to call the initializeGallery function
window.onload = initializeGallery;
