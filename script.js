// Get references to the <h1> tags
const widthTag = document.querySelector("#sizeInfo h1:nth-of-type(1)");
const heightTag = document.querySelector("#sizeInfo h1:nth-of-type(2)");

// Function to update the width and height in the <h1> tags
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    widthTag.textContent = "Width: " + width;
    heightTag.textContent = "Height: " + height;
}

// Call the function initially to display the initial width and height
updateSize();

// Add an event listener to the window for the "resize" event
window.addEventListener("resize", updateSize);
