import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CharactersContainer from "./components/characters/CharactersContainer";
import Error404 from "./components/error404/Error404";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/characters" element={<CharactersContainer />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
