const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        const x = event.clientX //view cursor x position from browser
        const y = event.clientY //view cursor y position from browser

        const buttonTop = event.target.offsetTop //https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
        const buttonLeft = event.target.offsetLeft //https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft

        const xInside = x - buttonLeft //x position of cursor minus offset of left
        const yInside = y - buttonTop //y position of cursor minus offset of top

        //create/add white circle span class every click

        const circle = document.createElement('span')
        circle.classList.add('circle')

        circle.style.top = yInside + 'px' //add calculated y position in relation to the css
        circle.style.left = xInside + 'px' //add calculted x position in relation to the css


        this.appendChild(circle) //https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

        setTimeout(() => circle.remove(), 500) //clean up DOM after click
    })
})