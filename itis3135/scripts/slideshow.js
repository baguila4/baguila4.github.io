$(document).ready(function () {
    let currentIndex = 0; 
    const images = $('#slideshow img');
    const captions = images.map(function () {
        return $(this).data('caption');
    }).get();

    function updateSlideshow(index) {
        images.hide(); 
        images.eq(index).show(); 
        $('.caption').text(captions[index]); 
    }

    $('#next').click(function () {
        currentIndex = (currentIndex + 1) % images.length; 
        updateSlideshow(currentIndex);
    });

    $('#prev').click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length; 
        updateSlideshow(currentIndex);
    });

    $('.nav button').click(function () {
        currentIndex = $(this).data('index'); 
        updateSlideshow(currentIndex);
    });

    
    updateSlideshow(currentIndex);
});
