let color = '';

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    color = "black"
    } else if (event.key === 's') {
        color = "blue"
    }
    else if (event.key === 'd') {
        color = "red"
        }
    })

const clr1 = document.querySelector ('#clr1')
clr1.addEventListener('click', () => (clr1.style.backgroundColor = color))

const clr2 = document.querySelector ('#clr2')
clr2.addEventListener('click', () => (clr2.style.backgroundColor = color))

const clr3 = document.querySelector ('#clr3')
clr3.addEventListener('click', () => (clr3.style.backgroundColor = color))

const  clr4 = document.querySelector ('#clr4')
clr4.addEventListener('click', () => (clr4.style.backgroundColor = color))
