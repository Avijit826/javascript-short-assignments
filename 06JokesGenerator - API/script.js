const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const api = 'https://api.chucknorris.io/jokes/random'

// let getJoke = 
jokeBtn.addEventListener('click',() => {
    fetch(api).then(res => res.json()).then(data =>{
        joke.innerHTML = data.value
    })
})