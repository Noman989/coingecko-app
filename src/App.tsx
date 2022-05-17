import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from './components/nav';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<div>Compare</div>} />
      </Routes>
    </div>
  );
}

export default App;
