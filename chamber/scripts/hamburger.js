const hamButton= document.querySelector("#menu");
const navbar= document.querySelector(".navbar");

hamButton.addEventListener('click', () => {
    navbar.classList.toggle('open');
    hamButton.classList.toggle('open');
});