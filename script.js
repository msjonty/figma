// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    document.querySelector('.navbar-logo').appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        document.querySelector('.navbar-menu').classList.toggle('active');
    });
});
