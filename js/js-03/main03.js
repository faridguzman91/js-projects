const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => { //on click add css show nav
    container.classList.add('show-nav')
})

close.addEventListener('click', () => { //on click remove show-nav
    container.classList.remove('show-nav')
})