import { PokemonType } from "../../types/types";
import TypeIcon from "../typeIcons/TypeIcon";
import "./pokemonCard.css";
import { TYPE_COLORS } from "../../enums/typeColors";
import { Capitalize } from "../../util/helper";

type PropsType = {
  name: string;
  id: number;
  types: PokemonType[];
  genus: string;
  height: number;
  weight: number;
  frontSpriteUrl: string;
  shinySpriteUrl: string;
};

const PokemonCard = ({
  name,
  id,
  types,
  genus,
  frontSpriteUrl,
  shinySpriteUrl,
  height,
  weight,
}: PropsType) => {
  //sets background to match pokemon type colors
  const style =
    types.length > 1
      ? {
          backgroundImage: `linear-gradient(90deg, ${
            TYPE_COLORS[types[0].type.name as keyof typeof TYPE_COLORS]
          } 5%, ${
            TYPE_COLORS[types[1].type.name as keyof typeof TYPE_COLORS]
          } 95%)`,
        }
      : {
          backgroundColor: `${
            TYPE_COLORS[types[0].type.name as keyof typeof TYPE_COLORS]
          }`,
        };

  return (
    <div className="card-container">
      <div
        className="card"
        style={{
          ...style,
        }}
      >
        <div className="card-front">
          #{id}
          <br />
          <span className="pokemon-name">{name}</span>
          <img className="sprite" src={frontSpriteUrl} alt="" />
          <div className="types">
            {types.map((y: { type: { name: string } }) => {
              return (
                <div>
                  <TypeIcon type={y.type.name} />
                  <div>{Capitalize(y.type.name)}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TODO: Remove line breaks and add spacing css */}
        <div className="card-back">
          #{id}
          <br />
          <span className="pokemon-name">{name}</span>
          <img className="sprite" src={shinySpriteUrl} alt="" />
          <br />
          <br />
          <div>{genus}</div>
          <br />
          <div>
            <div>
              H: {height / 10} m W: {weight / 10} kg
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
