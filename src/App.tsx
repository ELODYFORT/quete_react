import "./App.css";
import PokemonCard from "./components/PokemonCard";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const pokemon = pokemonList[0];
  console.log(pokemon);
  return (
    <>
      <PokemonCard pokemon={pokemon} />
    </>
  );
}

export default App;
