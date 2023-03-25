import React from 'react';
import {Route, Routes} from "react-router-dom"
import './App.css';
import Cards from './components/cards/Cards';
import Error404 from './components/error404/Error404';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cards" element={<Cards />}/>
        <Route path="/error404" element={<Error404 />}/>
      </Routes>
    </div>
  );
}

export default App;
