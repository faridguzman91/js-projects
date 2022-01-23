const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

//get user with promise (Axios)

async function getUser(username) {
    // axios(APIURL + username)
    //.then(res => res.json())
    //log result the catch errors if any
    // .then(res => console.log(res))
    // .catch(err => console.log(err))

    try {
        const { data } = await axios(APIURL + username);
        createUserCard(data);
        getRepos(username)
    } catch (err) {
        if (err.response.status == 404) {
            createErrorCard('No users found')
        }
    }
}

async function getRepos(username) {

    //get username + concat repo query
    try {
        const { data } = await axios(APIURL + username + '/repos');

        //addRepo class to card

        addReposToCard(data);

    } catch (err) {
            createErrorCard('No repos found // cant fetch repos')
    }
}

function createUserCard(user) {

    //create - inject card class with api responses

    const cardHTML = `   <div class="card">
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">


                <div class="user-info">
                    <h2>${user.name}</h2>
                    <p>${user.bio}</p>

                    <ul>
                        <li>${user.followers}<strong>Following</strong></li>
                        <li>${user.following}<strong>Followers</strong></li>
                        <li>${user.public_repos}<strong>Repos</strong></li>

                    </ul>

                    <a id="repos"></a>
                </div>
            </div>
`;

    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos.forEach(repo => {
        const repoEl = document.createElement('a')

        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)

    })
}


//create error card with 404 


function createErrorCard(msg) {
    const cardHTML = `
    <div class='card'>
    <h1>${msg}</h1>
    </div>
    `

    main.innerHTML = cardHTML
}

//submit event search - getUser / else return 0 value (placeholder)

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // const user = e.target.value

    const user = search.value;

    if (user) {
        getUser(user);
        search.value = "";
    }
});
