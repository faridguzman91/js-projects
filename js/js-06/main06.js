const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    //calc bottom of page in relation to window height
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {

        //retrieve the info on a Rectangle in relation to the window
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}