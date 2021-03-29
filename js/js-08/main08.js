const labels = document.querySelectorAll('.form-control label')

//loop thru the queryselector array
labels.forEach(label => {
    //select the text in the html element
    label.innerHTML = label.innerText
        //split each letter in the word array
        .split('')
        //map the letter array into a new <span> array add the property that adds the array
        // take the duration of every indexed letter, and delay it times (time)ms
        .map((letter, idx) => `<span style="transition-delay:${idx * 20}ms">${letter}</span>`)
        //join split letters back to a string
        .join('')
})