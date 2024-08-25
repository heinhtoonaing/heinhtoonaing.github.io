import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import HighlightedCars from './components/HighlightedCars';

function App() {
  const [highlightedCars, setHighlightedCars] = useState([]);

  const handleHighlight = (car) => {
    const newHighlights = [...highlightedCars, car];
    setHighlightedCars(newHighlights);
    localStorage.setItem('highlightedCars', JSON.stringify(newHighlights));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard onHighlight={handleHighlight} />} />
        <Route path="/highlighted-cars" element={<HighlightedCars />} />
      </Routes>
    </Router>
  );
}

export default App;
