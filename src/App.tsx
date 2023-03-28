import React from 'react';
import {Route, Routes} from "react-router-dom"
import './App.css';
import CharactersContainer from './components/characters/CharactersContainer';
import Error404 from './components/error404/Error404';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/characters" element={<CharactersContainer />}/>
        <Route path="/error404" element={<Error404 />}/>
      </Routes>
    </div>
  );
}

export default App;
