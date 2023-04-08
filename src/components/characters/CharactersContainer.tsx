import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Characters from "./Characters";
import {
  getCharacters,
  getPageSize,
  increasePageSizeBy3,
} from "../../redux/characters-reducer";
import { CharactersType } from "../../types/types";
import CharactersFilters, { GENDER } from "./CharactersFilters";
import { getPeople } from "./utils";
import Header from "../header/Header";

const CharactersContainer = () => {
  const dispatch = useDispatch();
  // const CharactersData = useSelector(getCharacters);
  const pageSize = useSelector(getPageSize);

  const [people, setPeople] = useState([]);
  const [gender, setGender] = useState(GENDER.ALL);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPeople()
      .then((data: any) => {
        setPeople(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  let filteredPeople = people;
  if (gender !== GENDER.ALL) {
    filteredPeople = people.filter(
      (item: CharactersType) => item.gender === gender
    );
  }

  return (
    <div>
      <Header />
      <CharactersFilters gender={gender} setGender={setGender} />
      <Characters
        CharactersData={filteredPeople}
        loading={loading}
        pageSize={pageSize}
        increasePageSizeBy3={increasePageSizeBy3}
      />
    </div>
  );
};

export default CharactersContainer;
