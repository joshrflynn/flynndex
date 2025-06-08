import { useEffect, useState } from "react";
import PokemonCard from "../pokemonCard/PokemonCard";
import { usePokedexContext } from "../../context/pokedexContext";
import Header from "../header/Header";
import "./homePageContainer.css";

const HomePageContainer = () => {
  const pokedexContext = usePokedexContext();

  const generations = [
    "All",
    "Kanto",
    "Johto",
    "Hoenn",
    "Sinnoh",
    "Unova",
    "Kalos",
    "Alola",
    "Galar",
    "Paldea",
  ];

  // generation is the index of the selected
  const [generation, setGeneration] = useState<number | null>(0);
  const [show, setShow] = useState(false);

  // add scroll listener to show 'back to top' button
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Header />
      {pokedexContext.isLoading ? (
        "loading"
      ) : (
        <>
          <div className="gen-button-container">
            {generations.map((x, index) => {
              return (
                <button
                  className="gen-button"
                  onClick={() => setGeneration(index)}
                >
                  {x}
                </button>
              );
            })}
          </div>
          <div className="all-cards-container">
            {pokedexContext.pokedexData.data.pokemon.map((x) => {
              if (!generation || x.species.generation === generation) {
                return (
                  <PokemonCard
                    name={x.species.speciesNames[0].name}
                    id={x.id}
                    frontSpriteUrl={x.sprites[0].url.front_default}
                    shinySpriteUrl={x.sprites[0].url.front_shiny}
                    types={x.types}
                    genus={x.species.speciesNames[0].genus}
                    height={x.height}
                    weight={x.weight}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
          <button
            className={`back-to-top ${show ? "visible" : ""}`}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Back to top"
          >
            Back To Top
          </button>
        </>
      )}
    </div>
  );
};

export default HomePageContainer;
