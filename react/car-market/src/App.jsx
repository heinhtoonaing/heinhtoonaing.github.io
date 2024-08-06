import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import HighlightedCars from './pages/HighlightedCars.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/highlighted" element={<HighlightedCars />} />
      </Routes>
    </Router>
  );
}

export default App;
