import axios from "axios";
import { CharactersType } from "../../types/types";

const instance = axios.create({
   baseURL: `https://swapi.dev/api/people/`,
 });

 let promises: any = [];
for (let i = 0; i < 9; i++) {
  promises.push(instance.get<CharactersType>(`?page=${i + 1}`));
}

export const charactersAPI = {
   getCharacters() {
     return Promise.all(promises).then((responses) => {
       return responses;
     });
   },
 };