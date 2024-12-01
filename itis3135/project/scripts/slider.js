document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.featured .scroll-container img');
    const nextButton = document.createElement('button');
    const prevButton = document.createElement('button');

    nextButton.innerText = 'Next';
    prevButton.innerText = 'Previous';
    document.querySelector('.featured').appendChild(prevButton);
    document.querySelector('.featured').appendChild(nextButton);

    function updateImageDisplay() {
        images.forEach((img, index) => {
            img.style.display = index === currentImageIndex ? 'block' : 'none';
        });
    }

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImageDisplay();
    });

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImageDisplay();
    });

    updateImageDisplay(); // Initialize the gallery display
});
