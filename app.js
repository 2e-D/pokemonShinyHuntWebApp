// document.querySelector('#search').addEventListener('click', getPokemon) // adds a listener so when you click search it will call getPokemon()

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '6',
}  // Creates the object of data to pull from the API

const {url,type,id} = apiData
 const apiUrl = `${url}${type}/${id}`


 fetch(apiUrl)
 .then( (data ) => data.json() ) // converts the data pulled into a json
 .then( (pokemon ) => generateHtml(pokemon) )  // generates HTML in the <pokemon> DIV


// Generates the HTML
const generateHtml = (data) => {
    console.log (data)

    const html = `
    <div class = "name"> ${data.name.charAt(0).toUpperCase()+ data.name.slice(1)}</div> 
    
     <div class = "sprites">
      <img src = ${data.sprites.front_shiny}> 
      <img src = ${data.sprites.back_shiny}>
      </div> 
      `// this div renders in the name and shiny sprites

    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
} 



 /* COUNTER */
let countUp = document.getElementById("counter") // Assigns counter in HTML to a variable and grabs it

console.log(countUp)
let count = 0        // sets a count variable


function increment() { // links to the increment function i set in HTML and calls it everytime the button is clicked
    count = count + 1
    countUp.innerText = count // Changes the Text from '0' to the count variable
}

// Unsure wether to add decrement button
function decrement() {
    count = count - 1
    countUp.innerText = count
}

/* COUNTER END */
  // PAGE LOADER

let loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
})
