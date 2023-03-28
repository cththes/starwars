import { createSlice } from "@reduxjs/toolkit";
import { charactersAPI } from "../api/api";
import { CharactersType } from "../types/types";
import { AppStateType } from "./store";

const charactersReducer = createSlice({
  name: "peopleReducer",
  initialState: {
    CharactersData: [] as Array<CharactersType>
    
  },
  reducers: {
    setCharacters(state, action) {
      state.CharactersData = action.payload
    }
  }
}
);

export const requestCharacters = () => {
  console.log('requestCharacters, reducer')
  return charactersAPI.getCharacters();
};

export const getCharacters = (state: AppStateType) => {
  return state.characters.CharactersData;
};

export default charactersReducer.reducer;
export const { setCharacters } = charactersReducer.actions;
