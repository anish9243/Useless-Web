// URL for fetching random goat images from loremflickr
const randomGoatImageUrl = "https://loremflickr.com/800/500/goat";

// Function to set the random image on page load
document.addEventListener("DOMContentLoaded", () => {
    const imgElement = document.getElementById("random-goat-image");
    imgElement.src = randomGoatImageUrl;
});

// Function to handle button click, fetch new image, play sound, and reload after delay
function handleButtonClick() {
    const imgElement = document.getElementById("random-goat-image");
    const newImageUrl = `${randomGoatImageUrl}?random=${Math.random()}`;

    // Add event listener to play sound after the image loads
    imgElement.onload = () => {
        playGoatSound();
        setTimeout(() => {
            imgElement.onload = null; // Remove the event listener to prevent multiple triggers
        }, 5000);
    };

    imgElement.src = newImageUrl; // Update the image src to load a new image
}

// Function to play goat sound
function playGoatSound() {
    const goatSound = document.getElementById("goat-sound");
    goatSound.play();
}
