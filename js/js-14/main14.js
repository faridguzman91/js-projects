const main = document.getElementById("main");
//grab api key from provider / sortable function
const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9930b5651b2201e1ff32cbb0da6e1055&page=1";
//grab image api - insert width=1280
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
//grab search query
const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=9930b5651b2201e1ff32cbb0da6e1055&query="';

//declare search elements
const form = document.getElementById("form");
const search = document.getElementById("search");

//get init movies

getMovies(API_URL);

//asynchronous fetch info

async function getMovies(url) {
    const res = await fetch(url); //result fetch
    const data = await res.json(); //data fetched

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = "";

    //for each movie item

    movies.forEach((movie) => {
        //for each movie item passed in , function => fetch object from json

        //destructure fetched api data (look in devtool console)
        const { title, poster_path, vote_average, overview } = movie;

        //create a new div
        const movieElement = document.createElement("div");

        movieElement.classList.add('movie');

        //return, add html element with data fetched
        movieElement.innerHTML = `
   
         <img src="${IMG_PATH + poster_path}" alt="${title}">
          <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
          </div>
         <div class="overview">
            <h3>Overzicht</h3>
            ${overview}
         </div>
     
        `

        main.appendChild(movieElement);
    });
}

//RETURN ALL THE VOTE AVERAGES IN HTML

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

//send submit - receive data

form.addEventListener('submit', (event) => {
    event.preventDefault(); //default prevent autosubmit to page

    const searchTerm = search.value; //whatever input in search

    //if theres a value and if theres <nothing>

    if (searchTerm && searchTerm != "") {
        getMovies(SEARCH_API + searchTerm); //fetch movie info + input value combination

        search.value = ""; //search value equals < nothing> string
    } else {
        window.location.reload();
    }
});

//Event.preventDefault()

//The Event interface's preventDefault() method tells
//the user agent that if the event
//does not get explicitly handled,
//its default action should not be taken as it normally would be.
//The event continues to propagate as usual,
//unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(),
//either of which terminates propagation at once.