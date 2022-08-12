const pokeApi = fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
.then ((response) => response.json())
.then ((data) => console.log(data))



function getPokemon() {
   
    const pokemon = pokeApi[Math.floor(Math.random() * api.length)]
    console.log( pokemon, api[pokemon])
}


