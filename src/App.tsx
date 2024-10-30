import "./App.css";
import PokemonCard from "./components/PokemonCard";
import React, { useState } from "react";

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
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemon = pokemonList[pokemonIndex];

  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  console.log(pokemon);

  return (
    <>
      <PokemonCard pokemon={pokemon} />
      <button onClick={handlePrevious} disabled={pokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleNext}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>
    </>
  );
}

export default App;
