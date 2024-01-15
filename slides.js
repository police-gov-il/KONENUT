let counter = 1;
const size = document.querySelector('.carousel-slide img').clientWidth;
const carouselSlide = document.querySelector('.carousel-slide');
const totalSlides = document.querySelectorAll('.carousel-slide img').length;

document.getElementById('nextBtn').addEventListener('click', () => {
    if (counter >= totalSlides - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
counter--;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Reset position at the end of the transition
carouselSlide.addEventListener('transitionend', () => {
if (counter === 0) {
carouselSlide.style.transition = "none";
counter = totalSlides - 2;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
} else if (counter === totalSlides - 1) {
carouselSlide.style.transition = "none";
counter = 1;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
});