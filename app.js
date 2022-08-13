function getPokemon() {
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => response.json())
    .then((data) => console.log(data));
    
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
