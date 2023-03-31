import { createSlice } from "@reduxjs/toolkit";
import { charactersAPI } from "../api/api";
import { CharactersType } from "../types/types";
import { AppStateType } from "./store";

const charactersReducer = createSlice({
  name: "peopleReducer",
  initialState: {
    CharactersData: [] as Array<CharactersType>,
    dropdownShow: false,
    pageSize: 12,
  },
  reducers: {
    setCharacters(state, action) {
      state.CharactersData = action.payload
    },
    setDropdown(state) {
      state.dropdownShow = !state.dropdownShow
    },
    increasePageSizeBy3(state) {
      state.pageSize += 3
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

export const getDropdownShow = (state: AppStateType) => {
  return state.characters.dropdownShow;
};

export const getPageSize = (state: AppStateType) => {
  return state.characters.pageSize
}

export default charactersReducer.reducer;
export const { setCharacters, setDropdown, increasePageSizeBy3 } = charactersReducer.actions;
