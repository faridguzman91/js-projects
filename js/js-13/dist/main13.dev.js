"use strict";

var smallCups = document.querySelectorAll('.cup-small'); //convert .cup-small into arrray

var liters = document.getElementById('liters');
var percentage = document.getElementById('percentage');
var remained = document.getElementById('remained'); //array.prototype.forEach(callback, thisArg = addEventListener)

smallCups.forEach(function (cup, idx) {
  cup.addEventListener('click', function () {
    return highlightCups(index);
  });
});

function highlightCups(idx) {
  if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
    idx--;
  }

  smallCups.forEach(function (cup, index2) {
    if (index2 <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
}