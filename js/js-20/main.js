const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const nameUser = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelector('.animated-bg')
const animated_bg_texts = document.querySelector('.animated-bg-text')

setTimeout(getData, 2000);



function getData() {
    header.innerHTML = '<img src="/images/img1.jpeg"/>'

    title.innerHTML = 'Lorem ipsum dolor sit amet'

    excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum?'

    profile_img.innerHTML = '<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>'

    nameUser.innerHTML = 'Jane Doe'
    
    date.innerHTML = 'Oct 28, 2020'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))


    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
