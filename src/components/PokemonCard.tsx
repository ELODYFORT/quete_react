interface Pokemon {
  name: string;
  imgSrc?: string;
}
function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  // const pokemon = pokemonList[0];
  return (
    <figure>
      {pokemon.imgSrc !== undefined ? (
        <>
          <img src={pokemon.imgSrc} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </>
      ) : (
        <>
          <p>???</p>
          <p>{pokemon.name}</p>
        </>
      )}
    </figure>
  );
}
console.log(PokemonCard);
export default PokemonCard;
