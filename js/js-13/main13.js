const smallCups = document.querySelectorAll('.cup-small') //convert .cup-small into arrray
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

//array.prototype.forEach(callback, thisArg = addEventListener)



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
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
    }
}

updateBigCup();



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