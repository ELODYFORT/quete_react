export default function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          type="button"
          onClick={() => setPokemonIndex(index)}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}
