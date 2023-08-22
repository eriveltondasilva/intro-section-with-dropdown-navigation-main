const header_label = document.querySelector('.js-header_label');
const header_menu = document.querySelector('#header_menu');
const aside = document.querySelector('.js-aside');

header_label.addEventListener('click', () => {
    if (header_menu.checked) {
        aside.classList.remove('is-expanded');
    } else {
        aside.classList.add('is-expanded');
    }
});
