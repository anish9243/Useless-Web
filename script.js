async function fetchRandomGoatImage() {
  try {
    const goatImage = document.getElementById("goatImage");
    const imageContainer = document.querySelector(".image");

    // Show loading animation
    imageContainer.classList.add("loading");

    const response = await fetch("/api/random-goat");
    const data = await response.json();
    const imageUrl = data.urls.raw + "&w=800&h=500";

    // Once image is loaded, remove loading animation and set image source
    goatImage.onload = function () {
      imageContainer.classList.remove("loading");
    };

    goatImage.src = imageUrl;
    goatImage.alt = "Goat of the Hour";
  } catch (error) {
    console.error("Error fetching the image:", error);
    // Handle error (e.g., display error message)
  }
}

// Fetch an initial image when the page loads
window.onload = fetchRandomGoatImage;
