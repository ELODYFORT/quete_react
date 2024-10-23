import "./App.css";
import PokemonCard from "./components/PokemonCard";

interface PokemonCard {
  name: "...";
  imgSrc?: "...";
}

function App() {
  const pokemon = { name: "mew", imgSrc: undefined };
  console.log(pokemon);
  return (
    <>
      <PokemonCard />
      <PokemonCard pokemon={[0]} />
    </>
  );
}

export default App;
