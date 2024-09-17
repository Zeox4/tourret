function openLightbox(imgSrc) {
    document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
let currentIndex = 0;

function showSlide(index) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-track img');
    const slideWidth = slides[0].clientWidth;

    currentIndex = index;

    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-track img');
    const maxIndex = slides.length - 1;

    currentIndex = (currentIndex > 0) ? currentIndex - 1 : maxIndex;
    showSlide(currentIndex);
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-track img');
    const maxIndex = slides.length - 1;

    currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
}
function openLightbox(imageArray) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');

    // Muestra la primera imagen en el carrusel
    lightboxImg.src = imageArray[0];
    lightbox.style.display = 'block';

    // Lógica para navegar por el carrusel
    var currentIndex = 0;

    document.getElementById('close-btn').onclick = function () {
        lightbox.style.display = 'none';
    };

    document.onkeydown = function (event) {
        event = event || window.event;
        if (event.keyCode == 27) {
            lightbox.style.display = 'none';
        } else if (event.keyCode == 37) { // Flecha izquierda
            currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
            lightboxImg.src = imageArray[currentIndex];
        } else if (event.keyCode == 39) { // Flecha derecha
            currentIndex = (currentIndex + 1) % imageArray.length;
            lightboxImg.src = imageArray[currentIndex];
        }
    };
}