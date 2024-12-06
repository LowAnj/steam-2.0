// Get the menu icon and menu element
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');


// Function to toggle the menu visibility
function toggleMenu() {
    menu.classList.toggle('active');
}


// Function to close the menu when clicking outside
function closeMenu(event) {
    if (!menu.contains(event.target) && event.target !== menuIcon) {
        menu.classList.remove('active');
    }
}


// Event listener to open/close the menu
menuIcon.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenu);


// Carousel functionality
let currentSlide = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalSlides = carouselItems.length;


// Function to show the current slide
function showSlide(index) {
    carouselItems.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}


// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}


// Function to go to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}


// Event listeners for manual controls
document.querySelector('.carousel-next').addEventListener('click', nextSlide);
document.querySelector('.carousel-prev').addEventListener('click', prevSlide);


document.querySelector('.carousel-prev').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default action of the link
    event.stopPropagation(); // Prevent the event from bubbling up
    prevSlide();
});


// Initialize carousel
showSlide(currentSlide);


// Automatic slideshow every 5 seconds
setInterval(nextSlide, 5000); // Change slide every 5 seconds


// links wrapping the images
carouselItems.forEach(item => {
    const link = item.querySelector('a'); // Select the link within the carousel item
    if (link) {
        link.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the carousel controls from being triggered
        });
    }
});



