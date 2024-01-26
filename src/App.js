import logo from './source_files/logo.svg';
import './App.css';
import { useState } from 'react';
import { Nekaj } from './Fragmenti/Nekaj';
import { Frag } from './Fragmenti/Frag';
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Nekaj/>}></Route>
        <Route path="/frag" element={<Frag/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
