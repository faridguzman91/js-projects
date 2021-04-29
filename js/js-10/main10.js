const buttonToggle = document.querySelectorAll('.faq-toggle') //bring in toggle buttons (querySelectorAll)

buttonToggle.forEach(toggle => { //loop through nodelist (forEach)
    toggle.addEventListener('click', () => { //add click event  (addEventListener)
        toggle.parentNode.classList.toggle('active')
            //toggle the active class on the parent node (.parentNode & classList.toggle)

    })
})