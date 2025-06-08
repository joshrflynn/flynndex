export type PokedexData = {
  data: {
    pokemon: SinglePokedexData[];
  };
  errors: [] | null;
};

export type SinglePokedexData = {
  id: number;
  types: PokemonType[];
  sprites: PokemonSprite[];
  species: PokemonSpecies;
  height: number;
  weight: number;
};

export type PokemonType = {
  type: {
    name: string;
  };
};

export type PokemonSprite = {
  url: {
    front_default: string;
    front_shiny: string;
  };
};

export type PokemonSpecies = {
  speciesNames: { name: string; genus: string }[];
  generation: number;
};
