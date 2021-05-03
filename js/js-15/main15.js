//grab clock elements
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const timeElement = document.querySelector('.time')

//grab date
const dateElement = document.querySelector('.date')

//grab toggle button
const toggleElement = document.querySelector('.toggle')

//grab days and months elements

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

//add event listener on click => add dark if theres light and vice versa
toggleElement.addEventListener('click', (event) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        event.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        event.target.innerHTML = 'Light Mode'
    }
})

function setTime() {
    //set the time with new contruct for Date
    const time = new Date();

    //get constructs for time elements
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    //show am when < 12 , show pm when >12
    const amPM = hours >= 12 ? 'pm' : 'am'

    //scale variables to time formats (arg1 = element, arg2 = starttime, arg3 = endtime, arg4 = start degrees , arg5 = end degrees)
    //grab css property for degree rotations

    hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    //we want the zero always visible when less than 10 minutes, if < 9, display 0 then else dont display 0
    timeElement.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`: minutes} ${amPM}`
    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

}

//scale variables to time formats (arg1 = element, arg2 = start, arg3 = end, arg4 = start degrees , arg5 = end degrees)
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

//init time
setTime();

//set interval tick every second (1000ms)
setInterval(setTime, 1000);