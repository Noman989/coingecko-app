import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from './components/nav';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Compare } from './pages/Compare';
import { CoinId } from './pages/CoinId';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/:coinid" element={<CoinId />} />
      </Routes>
    </div>
  );
}

export default App;
