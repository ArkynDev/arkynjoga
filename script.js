const backTopBtn  = document.getElementById('backtopbtn');
const toggleMenuInput = document.getElementById('burger');
const toggleBurger = document.getElementById('toggle-burguer');
const navmenu = document.getElementById('navmenu');

function start() {
    toggleMenu();
}

function backTop() {
    window.scrollTo(0, 0);
}

function toggleMenu() {
    if(toggleMenuInput.checked) {
        navmenu.classList.add('showNav');
        navmenu.classList.remove('hideNav');
    } else {
        navmenu.classList.remove('showNav');
        navmenu.classList.add('hideNav');
    }
}

function toSection() {
    if(toggleMenuInput.checked) {
        toggleMenuInput.checked = false;
        toggleMenu();
    }
}

function teste() {
    console.log('!!!');
}

document.addEventListener('mousedown', (event) => {
    if(!navmenu.contains(event.target) && !event.target.closest('#toggleBurger')) {
        toggleMenuInput.checked = false;
        toggleMenu();
    }
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if(scrollY >= 69.5999984741211) {
        backTopBtn.classList.add('showBacktoTop');
        if(backTopBtn.classList.contains('hideBacktoTop')) {
            backTopBtn.classList.remove('hideBacktoTop');
        }
    } else if (scrollY < 90) {
        backTopBtn.classList.add('hideBacktoTop');
        if(backTopBtn.classList.contains('showBacktoTop')) {
            backTopBtn.classList.remove('showBacktoTop');
        }
    }
})

toggleMenuInput.addEventListener('click', toggleMenu);
backTopBtn.addEventListener('click', backTop);