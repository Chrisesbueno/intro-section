const menu = document.querySelector('.open');
const modal = document.querySelector('nav');
const closed = document.querySelector('.close');
const icon = document.querySelectorAll('.icon-down')

menu.addEventListener('click', () => {
    modal.classList.add('active')
})

closed.addEventListener('click', () => {
    modal.classList.remove('active')
})

icon.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('show')) {
            element.classList.remove('show')
        } else {
            element.classList.add('show')
        }
    })
});