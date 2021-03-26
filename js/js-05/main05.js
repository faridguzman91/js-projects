const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')


//init count
let load = 0

//set interval ms
let int = setInterval(blurring, 30)

function blurring() {

    //increment loading count + 1 with interval 30ms
    load++

    //when loading reaches 100 , stop

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerHTML = `${load}%`;
    //scale the range from 100 to 1 (number=let load, in_min=0 to in_max=100, to output to min=1 to max=0)
    loadText.style.opacity = scale(load, 0, 100, 1, 0) //function(arg1,arg2,arg3,arg4)

    //blur out from 30px to 0px using scale function
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


//map range of numbers to another range of numbers => function(arg1,arg2,arg3,arg4)
const scale = (num, in_min, in_max, out_min, out_max) => {
    //return the scaled calculations of the input
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}