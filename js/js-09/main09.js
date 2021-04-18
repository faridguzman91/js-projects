//add the id where the outputs should be
const insert = document.getElementById('insert')

//add the eventlisteners according to the html awddiv blocks

window.addEventListener('keydown', (event) => { //this is a standard event listeners for key press codes
    insert.innerHTML =
        `
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key} 
    <small>event.key</small>
    </div>

    <div class="key">
     ${event.keyCode}
     <small>event.keyCode</small>
    </div>

    <div class="key">
     ${event.code}
       <small>event.code</small>
    </div>
    `
})