/// hide images 
// Get all images in the container
const images = document.querySelectorAll('.img-profile img');
let currentIndex = 0;

// Function to show the current image and hide others with fade effect
function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.classList.add('show'); // Add show class to fade in
    } else {
      img.classList.remove('show'); // Remove show class to fade out
    }
  });
}

// Initial display of the first image
showImage(currentIndex);

// Set interval to change the displayed image every 3 seconds
setInterval(() => {
  // Update the index to show the next image
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 5000); // Change 3000 to your desired interval in milliseconds
