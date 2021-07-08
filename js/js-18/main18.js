const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

//init function drag
function dragStart() {
    //append classname 'fill'
    this.className = 'fill'
}

function dragEnd(event) {
    event.preventDefault()
}

function dragOver(event) {
    event.preventDefault()

}

function dragEnter(event) {
    event.preventDefault() //append class hovered
    this.className = 'empty'

}

function dragLeave() {

}

function dragDrop() {
    this.className = 'empty'
        //append the fill class everywhere we drop
    this.append(fill)
}