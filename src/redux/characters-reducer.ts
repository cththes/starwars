import { createSlice } from "@reduxjs/toolkit";
import { charactersAPI } from "../api/api";
import { AppStateType } from "./store";

const charactersReducer = createSlice({
  name: "peopleReducer",
  initialState: {
    Characters: {
      
    },
    
  },
  reducers: {
    
  }
}
);

export const requestCharacters = () => {
  return charactersAPI.getCharacters();
};

export default charactersReducer.reducer;
export const {  } = charactersReducer.actions;
