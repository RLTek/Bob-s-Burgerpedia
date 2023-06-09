import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home.js';
import Episodes from './components/episodes';
import Episode from './components/episode';
import Characters from './components/characters';
import Character from './components/character';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/episodes" element={<Episodes />}></Route>
      <Route path="/episode/:id" element={<Episode />}></Route>
      <Route path="/characters" element={<Characters />}></Route>
      <Route path="/character/:id" element={<Character />}></Route>
    </Routes>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
