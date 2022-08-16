let apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type : 'pokemon',
    id : '100'
}

console.log (apiData)

let (url,type,id) = apiData2;
let apiurl = `${url}${type}/${id}`;


fetch (apiUrl)
.then ( (data) => data.json() )
.then ( (pokemon) => generateHtml(pokemon) )