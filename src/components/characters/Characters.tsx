import React from "react";
import { CharactersType } from "../../types/types";
import styles from "./Characters.module.css";

interface Props {
  CharactersData: Array<CharactersType>;
}

function Characters(props: Props) {
  if (props.CharactersData.length === 0) return null;
  const { CharactersData } = props;

  return <div>{CharactersData.map(char => <div>{char.name}</div>)}</div>;
}

export default Characters;
