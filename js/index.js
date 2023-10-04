// Back to top button functionality
const backToTopFunctionality = () => {
    const backToTopBtn = document.querySelector('.back-to-top');
    window.onscroll = () => {
        backToTopBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? 'flex' : 'none';
    };
}

// Menu items functionality
const menuItemsFunctionality = () => {
    const menuItems = document.getElementsByClassName('menu-item');
    Array.from(menuItems).forEach(item => {
        item.onclick = () => {
            document.querySelector('.menu-item.active').classList.remove('active');
            item.classList.add('active');
        };
    });
}

// Scroll animation functionality
const scrollAnimationFunctionality = () => {
    const scroll = window.requestAnimationFrame || (callback => window.setTimeout(callback, 1000/60));
    const elToShow = document.querySelectorAll('.animasi-scroll');

    const isElInViewPort = el => {
        const rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0 && rect.bottom >= 0) ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
            (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
    }

    const loop = () => {
        elToShow.forEach(item => {
            item.classList[isElInViewPort(item) ? 'add' : 'remove']('start');
        });
        scroll(loop);
    }

    loop();
}

// Bottom navigation functionality
const bottomNavFunctionality = () => {
    const bottomNavItems = document.querySelectorAll('.mobile-navigasi-item');
    const bottomMove = document.querySelector('.mobile-navigasi-animasipindah');

    bottomNavItems.forEach((item, index) => {
        item.onclick = () => {
            document.querySelector('.mobile-navigasi-item.active').classList.remove('active');
            item.classList.add('active');
            bottomMove.style.left = `${index * 25}%`;
        };
    });
}

// Initialize all functionalities
backToTopFunctionality();
menuItemsFunctionality();
scrollAnimationFunctionality();
bottomNavFunctionality();
