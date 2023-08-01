async function getAllPokemons() {
    const pokemons = [];
  
    for (let i = 1; i <= 30; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      const data = await response.json();
      pokemons.push(data);
    }
  
    return pokemons;
  }
  

export default getAllPokemons 