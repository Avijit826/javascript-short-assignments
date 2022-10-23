const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const api = 'https://api.chucknorris.io/jokes/random'

// calls API to get the joke on button click
jokeBtn.addEventListener('click',() => {
    fetch(api).then(res => res.json()).then(data =>{
        joke.innerHTML = data.value
    })
})

// Fetch initial data when document loads
window.onload = () =>{
    jokeBtn.click()
}