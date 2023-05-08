const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelector('.carousel-items');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let itemWidth = carouselItems.firstElementChild.offsetWidth;
let itemsPerView = Math.floor(carousel.offsetWidth / itemWidth);
let currentPosition = 0;
let maxPosition = carouselItems.children.length - itemsPerView;

prevBtn.addEventListener('click', () => {
  if (currentPosition > 0) {
    currentPosition--;
    carouselItems.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPosition < maxPosition) {
    currentPosition++;
    carouselItems.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
  }
});
