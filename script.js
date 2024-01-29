document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleNightMode');
    const body = document.body;
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('night-mode');
        header.classList.toggle('night-mode');
        main.classList.toggle('night-mode');
        footer.classList.toggle('night-mode');
    });
}); 