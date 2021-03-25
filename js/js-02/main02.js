const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('circle') //create array of all circle items


function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('active')
    progress.style.width = (actives.length / circles.length) * 100 + '%'

}

let currentActive = 1 //start counter at 1 by default

next.addEventListener('click', () => {
    //adds 1 to the counter on the current circle
    currentActive++

    //Allow the counter not pass the number of circles in array

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    //decrement 1 to the counter on the current circle
    currentActive--;
    //if its not bigger than the amount of circles return to 1 instead of 0 and -1
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})