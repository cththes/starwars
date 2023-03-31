import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Characters from "./Characters";
import { getCharacters, getDropdownShow } from "../../redux/characters-reducer";
import {
  requestCharacters,
  setCharacters,
} from "../../redux/characters-reducer";

function CharactersContainerPagination() {
  const CharactersData = useSelector(getCharacters);

  useEffect(() => {
    axios
      .get(
        `
        https://swapi.dev/api/people/?page=6
      `
      )
      .then((response) => setCharacters(response.data));
  });

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  const scrollHandler = (e) => {
    console.log("scroll");
  };
  return (
    <div>
      <Characters CharactersData={CharactersData} />
    </div>
  );
}

export default CharactersContainerPagination;
