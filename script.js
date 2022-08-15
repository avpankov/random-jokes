let generateButton = document.querySelector('.generate-joke');
let loading = document.querySelector('.loading');
let joke = document.querySelector('.joke');
let url = 'https://api.icndb.com/jokes';

generateButton.addEventListener('click', generateJoke);

async function generateJoke() {
    joke.innerHTML = 'Loading...';
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok === true) {
        joke.innerHTML = data.value[Math.round(Math.random() * data.value.length)]['joke'];
    }
}