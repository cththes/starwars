import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { CharactersType } from "../../types/types";
import styles from "./Characters.module.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";


interface Props {
  CharactersData: Array<CharactersType>;
  dropdownShow: boolean;
  pageSize: number;
  increasePageSizeBy3: any
}

function Characters(props: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

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

  let CharactersDataWithPagination: CharactersType[] = [];

  let setCharactersDataWithPagination = (min: number, max: number) => {
    for (let i = min; i < max; i++) {
      CharactersDataWithPagination[i] = CharactersData[i];
    }
  };
  setCharactersDataWithPagination(0, props.pageSize);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      dispatch(props.increasePageSizeBy3)
    }
    console.log("scrollHeight", e.target.documentElement.scrollHeight);
    console.log("scrollTop", e.target.documentElement.scrollTop);
    console.log("innerHeight", window.innerHeight);
  };

  return (
    <div>
      <div>
        <h1>
          {props.CharactersData.length} People for you to choose your favorite
        </h1>
        <Dropdown
          onChange={onDropdownChange}
          className={styles.dropdown}
          options={options}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>

      <div className={styles.characters}>
        {CharactersDataWithPagination.map((char) => (
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
