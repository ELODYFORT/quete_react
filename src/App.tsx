import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

const pokemonList = [
  {
    id: "1",
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: "2",
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: "3",
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id: "4",
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    id: "5",
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  console.log(pokemonList);
  useEffect(() => {
    alert("hello pokemon trainer");
  }, []);
  useEffect(() => {
    if (pokemonList[pokemonIndex].name === "pikachu") {
      alert("pika pika !");
    }
  }, [pokemonIndex]);
  return (
    <>
      <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    </>
  );
}

export default App;
