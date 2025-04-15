// Select all images in the gallery
const images = document.querySelectorAll('.grid-item img');

// Create a lightbox element
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

// Create an image element to display in the lightbox
const lightboxImage = document.createElement('img');
lightbox.appendChild(lightboxImage);

// Close the lightbox when clicked
lightbox.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Add click event to each image
images.forEach(image => {
    image.addEventListener('click', function() {
        lightboxImage.src = this.src; // Set the lightbox image source to the clicked image
        lightbox.style.display = 'flex'; // Show the lightbox
    });
});