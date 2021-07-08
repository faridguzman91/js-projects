const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')

textArea.focus()

textArea.addEventListener('keyup', (event) => {
    createTags(event.target.value)


    if (event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = '' //remove event value
        }, 10)

        randomSelect() //init function when enter pressed
    }
})

function createTags(input) {

    //split the choices with commas , as an array in input textarea, map then trim array
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


    tagsEl.innerHTML = ''; //tag element is empty before typing

    tags.forEach(tag => {
        const tagEl = document.createElement('span'); //create span class after textarea type
        tagEl.classList.add('tag'); //add tags 
        tagEl.innerText = tag; //whatever text appears
        tagsEl.appendChild(tagEl); //https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild5
    })
}

function randomSelect() {
    const times = 30 //highlight 30x before stopping

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100) //100ms to unhighlight
    }, 100);

    setTimeout(() => {
            clearInterval(interval)

            setTimeout(() => {
                const randomTag = pickRandomTag()

                highlightTag(randomTag)
            })

        }, times * 100) //highlight 30 times before choosing
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}