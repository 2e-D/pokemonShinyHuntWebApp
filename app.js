const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    name: 'groudon',
} 
console.log (apiData)
const {url,type,name} = apiData
 const apiUrl = `${url}${type}/${name}`


 fetch(apiUrl)
 .then( (data ) => data.json() )
 .then( (pokemon ) => generateHtml(pokemon) )  



const generateHtml = (data) => {
    console.log (data)

    const html = `
    <div class = "name"> ${data.name.charAt(0).toUpperCase()+ data.name.slice(1)}</div> 
    
        <div class = "sprites">
      <img  class = "pokeSprite" src = ${data.sprites.front_shiny}> 
      <img class = "pokeSprite" src = ${data.sprites.back_shiny}>
        </div> 
      `

    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
} 



 /* COUNTER */
let countUp = document.getElementById("counter")

console.log(countUp)
let count = 0       


function increment() { 
    count = count + 1
    countUp.innerText = count 
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


// Day and night backgrounds

let currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 18) {
    if (document.body) {
        document.body.className = "MainImageDay"
    }
} else {
    if (document.body) {
        document.body.className = "MainImageNight"
    }
}

// HOVER MENU 



