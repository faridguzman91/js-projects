const panels = document.querySelectorAll('.panel') //select all panels 1 to 5 (array, indexed)


//loop through each item in the array, add an eventlistener to each item
panels.forEach((panel) => {
    //adds the css class .active to every panel each click
    panel.addEventListener('click', () => {
        removeActiveClasses() //remove avtive classes from every other panel on click
        panel.classList.add('active') //add the active class on click
    });
});


//create a function that removes the active class
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}