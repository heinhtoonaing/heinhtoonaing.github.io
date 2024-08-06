import React, { useState, useEffect } from 'react';
import data from '../utils/data.json';

const HighlightedCars = () => {
  const [highlightedCars, setHighlightedCars] = useState([]);

  useEffect(() => {
    const storedCars = JSON.parse(localStorage.getItem('highlightedCars')) || [];
    setHighlightedCars(storedCars);
  }, []);

  const toggleHighlight = (car) => {
    const updatedCars = highlightedCars.includes(car)
      ? highlightedCars.filter(c => c !== car)
      : [...highlightedCars, car];

    setHighlightedCars(updatedCars);
    localStorage.setItem('highlightedCars', JSON.stringify(updatedCars));
  };

  return (
    <div>
      <h1>Highlighted Cars</h1>
      <ul>
        {data.map(car => (
          <li key={car.model}>
            {car.brand} {car.model} - {car.value}
            <button onClick={() => toggleHighlight(car.model)}>
              {highlightedCars.includes(car.model) ? 'Remove' : 'Highlight'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighlightedCars;
