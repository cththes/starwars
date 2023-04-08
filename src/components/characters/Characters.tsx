import React, { useState } from "react";
import { CharactersType } from "../../types/types";
import styles from "./Characters.module.css";
import "react-dropdown/style.css";
import { Modal, Pagination, PaginationProps } from "antd";

interface Props {
  CharactersData: Array<CharactersType>;
  pageSize: number;
  increasePageSizeBy3: any;
  loading: any;
}

function Characters(props: Props) {
  const [page, setPage] = useState(1);
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

  const CharactersDataPage = [];
  let min = (page - 1) * 9
  let max = (page - 1) * 9

  for (let i = 0 + min; i < 9 + max; i++) {
    CharactersDataPage[i] = props.CharactersData[i];
  }

  return (
    <div>
      <div>
        <h1 className={styles.characters__h1}>
          {props.CharactersData.length} People for you to choose your favorite
        </h1>
      </div>
      <div>
        <Modal />
      </div>

      <div className={styles.characters}>
        {CharactersDataPage.map((item: CharactersType) => (
          <div className={styles.characterBlock}>
            <h3 className={styles.character__h3}>{item.name}</h3>
            <div className={styles.character__number}>
              <span className={styles.character__text}>{item.height}</span>
              <span className={styles.character__text}>{item.mass}</span>
            </div>

            <div className={styles.character__string}>
              <span className={styles.character__hair_color}>
                {item.hair_color !== "n/a" && item.hair_color}
              </span>
              <span className={styles.character__skin_color}>
                {item.skin_color}
              </span>
              <span className={styles.character__eye_color}>
                {item.eye_color}
              </span>
              <span className={styles.character__birth_year}>
                {item.birth_year !== "unknown" && item.birth_year}
              </span>
              <span className={styles.character__gender}>
                {item.gender !== "n/a" && item.gender}
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
      <div>
        <Pagination
          showSizeChanger={false}
          defaultCurrent={1}
          total={props.CharactersData.length}
          showQuickJumper={false}
          current={page}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
}

export default Characters;
