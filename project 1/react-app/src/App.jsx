import './ChartConfig'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HighlightedCars from './pages/HighlightedCars';
import './App.css';

function App() {
  return (
    <Router basename="/car-market-analysis">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/highlighted-cars" element={<HighlightedCars />} />
      </Routes>
    </Router>
  );
}

export default App;
