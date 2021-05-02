const smallCups = document.querySelectorAll('.cup-small') //convert .cup-small into arrray of 8 items
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

//example 
// <div id="div-01">Here is div-01</div>
// <div id="div-02">Here is div-02</div>

//<script type="text/javascript">

// let el = document.getElementById('div-01').nextElementSibling;
// console.log('Siblings of div-01:');
// while (el) {
//   console.log(el.nodeName);
//   el = el.nextElementSibling;
//  }
// </script>

//array.prototype.forEach(callback, thisArg = addEventListener)

updateBigCup(); //initiate function on site load

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
})

function highlightCups(index) {

    //element.nextElementSibling

    //read-only property returns the element immediately following the specified one 
    //in its parent's children list, or null if the specified element is the last one in the list.
    //check if the next 'sibling' element in the array has the full class , and if so decrement its own full class

    if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--
    }

    smallCups.forEach((cup, index2) => {
        if (index2 <= index) {
            cup.classList.add('full');

        } else {
            cup.classList.remove('full');
        }
    })

    updateBigCup();
    //initiate full cup calculation on click
}

//update big cup in relation to the length of array smallcups

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden' //css 
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible' //css
        percentage.style.height = `${fullCups / totalCups * 330}px` //css total max height, full cup
        percentage.innerText = `${fullCups / totalCups * 100}%` //display text in percentages
    }

    if (fullCups === totalCups) { //is fullCups is 100% height, remove text 'remained'
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L` //calculate remains in 1000ml = 1l / 4 quarters

    }

}