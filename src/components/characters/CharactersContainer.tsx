import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Characters from "./Characters";
import {
  getCharacters,
  getDropdownShow,
  getPageSize,
  increasePageSizeBy3
} from "../../redux/characters-reducer";
import {
  requestCharacters,
  setCharacters,
} from "../../redux/characters-reducer";
import { CharactersType } from "../../types/types";

const CharactersContainer = () => {
  const dispatch = useDispatch();
  const CharactersData = useSelector(getCharacters);
  const dropdownShow = useSelector(getDropdownShow);
  const pageSize = useSelector(getPageSize);

  useEffect(() => {
    if (CharactersData.length === 0) {
      requestCharacters().then((responses) => {
        let results: Array<CharactersType> = [];

        responses.forEach((page) => {
          results = [...results, ...page.data.results];
        });
        dispatch(setCharacters(results));
      });
    }
  }, [CharactersData.length, dispatch]);

  return (
    <Characters
      CharactersData={CharactersData}
      dropdownShow={dropdownShow}
      pageSize={pageSize}
      increasePageSizeBy3={increasePageSizeBy3}
    />
  );
};

export default CharactersContainer;