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
          className={styles.dropdown}
          options={options}
          value={defaultOption}
          placeholder="Select an option"
        />
        ;
      </div>
      <div>
        {CharactersData.map((char) => (
          <div>{char.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
