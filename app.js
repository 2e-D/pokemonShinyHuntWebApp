const pokeApi = fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then((response) => response.json())
    .then((data) => console.log(data));



let countUp = document.getElementById("counter")

console.log(countUp)
let count = 0


function increment() {
    count = count + 1
    countUp.innerText = count
}


function decrement() {
    count = count - 1
    countUp.innerText = count
}



