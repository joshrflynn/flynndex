import axios from "axios";
import { PokedexData } from "../types/types";

export const GetPokedexData = async (): Promise<PokedexData> => {
  const query = `
  query pokedexData {
  pokemon: pokemon_v2_pokemon(where: {is_default: {_eq: true}}) {
    id
    types: pokemon_v2_pokemontypes {
      type: pokemon_v2_type {
        name
      }
    }
    sprites: pokemon_v2_pokemonsprites(where: {}) {
      url: sprites(path: "other.home")
    }
    species: pokemon_v2_pokemonspecy {
      speciesNames: pokemon_v2_pokemonspeciesnames(
        where: {pokemon_v2_language: {name: {_eq: "en"}}}
      ) {
        name
        genus
      }
      generation: generation_id
    }
    height
    weight
  }
}`;

  const response = await axios.post("https://beta.pokeapi.co/graphql/v1beta", {
    query,
    headers: {
      "Content-Type": "application/json",
      "X-Method-Used": "graphiql",
    },
  });

  console.error(response.data);

  return response.data;
};
