// Select elements
const backToTopBtn = document.querySelector('.back-to-top');
const menuItems = document.querySelectorAll('.menu-item');
const animasiScrollItems = document.querySelectorAll('.animasi-scroll');
const bottomNavItems = document.querySelectorAll('.mobile-navigasi-item');
const bottomMove = document.querySelector('.mobile-navigasi-animasipindah');

// Function to handle scrolling
function handleScroll() {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Function to handle menu item clicks
function handleMenuItemClick(item) {
    const currMenu = document.querySelector('.menu-item.active');
    currMenu.classList.remove('active');
    item.classList.add('active');
}

// Add click event listeners to menu items
menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        handleMenuItemClick(item);
    });
});

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= window.innerHeight || rect.top <= 0)
    );
}

// Function to animate elements in viewport
function animateElements() {
    animasiScrollItems.forEach((item) => {
        if (isElementInViewport(item)) {
            item.classList.add('start');
        } else {
            item.classList.remove('start');
        }
    });
    requestAnimationFrame(animateElements);
}

// Start the animation loop
animateElements();

// Function to handle bottom navigation item clicks
function handleBottomNavItemClick(item, index) {
    console.log('object');
    const currItem = document.querySelector('.mobile-navigasi-item.active');
    currItem.classList.remove('active');
    item.classList.add('active');
    bottomMove.style.left = index * 25 + '%';
}

// Add click event listeners to bottom navigation items
bottomNavItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        handleBottomNavItemClick(item, index);
    });
});
