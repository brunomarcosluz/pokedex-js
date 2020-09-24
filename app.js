const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromisses = []

    for (let i = 1; i <= 150; i++){
        pokemonPromisses.push(fetch(getPokemonUrl(i)).then(response => response.json()))      
    }

    Promise.all(pokemonPromisses)
     .then(pokemons => {
         //console.log(pokemons)

         const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
             accumulator += `
             <li class="card">
               <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
               <p class="card-subtitle">${pokemon.types.map(typeInfo => typeInfo.type.name).join(' | ')}</p>
             </li>
             `
             return accumulator
         }, '')
         console.log(lisPokemons);
     })
}

fetchPokemon()