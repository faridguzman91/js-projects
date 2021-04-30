const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target') //converts data-target attribute value into a number
        const c = +counter.innerText //converts text into incrementing number
        const increment = target / 200

        if (c < target) { //if the actual number is less that the targeted data-target number
            counter.innerText = `${Math.ceil(c + increment)}` //ceil = round up the decimals to whole numbers
            setTimeout(updateCounter, 1) //update number by 1 millisecond
        } else {
            counter.innerText = target //set and display the target without counting immediately
        }
    }

    updateCounter()
})