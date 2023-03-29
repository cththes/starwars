import React from "react";
import { CharactersType } from "../../types/types";
import styles from "./Characters.module.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

interface Props {
  CharactersData: Array<CharactersType>;
  dropdownShow: boolean;
}

function Characters(props: Props) {
  if (props.CharactersData.length === 0) return null;
  const { CharactersData } = props;

  const options = [
    "all",
    "name",
    "height",
    "mass",
    "hair_color",
    "skin_color",
    "eye_color",
    "birth_year",
    "gender",
    "homeworld",
    "films",
    "species",
    "vehicles",
    "starships",
    "created",
    "edited",
    "url",
  ];

  const defaultOption = options[0];

  const onDropdownChange = () => {};

  return (
    <div>
      <div>
        <h1>
          {props.CharactersData.length} Peoples for you to choose your favorite
        </h1>
        <span>
          {props.CharactersData.length} Peoples for you to choose your favorite
        </span>
        <Dropdown
          onChange={onDropdownChange}
          className={styles.dropdown}
          options={options}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
      <div className={styles.characters}>
        {CharactersData.map((char) => (
          <div className={styles.characterBlock}>
            <h3 className={styles.character__h3}>{char.name}</h3>
            <div className={styles.character__number}>
              <span className={styles.character__text}>{char.height}</span>
              <span className={styles.character__text}>{char.mass}</span>
            </div>

            <div className={styles.character__string}>
              <span className={styles.character__hair_color}>
                {char.hair_color !== "n/a" && char.hair_color}
              </span>
              <span className={styles.character__skin_color}>
                {char.skin_color}
              </span>
              <span className={styles.character__eye_color}>
                {char.eye_color}
              </span>
              <span className={styles.character__birth_year}>
                {char.birth_year !== "unknown" && char.birth_year}
              </span>
              <span className={styles.character__gender}>
                {char.gender !== "n/a" && char.gender}
              </span>
              {/* <span className={styles.character__homeworld}>{char.homeworld}</span> */}
              {/* <span className={styles.character__films}>{char.films}</span> */}
              {/* <span className={styles.character__species}>{char.species}</span> */}
              {/* <span className={styles.character__vehicles}>{char.vehicles}</span> */}
              {/* <span className={styles.character__starships}>{char.starships}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
