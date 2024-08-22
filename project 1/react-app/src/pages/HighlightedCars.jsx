import React, { useState, useEffect } from 'react';

function HighlightedCars() {
  const [highlightedCars, setHighlightedCars] = useState([]);

  useEffect(() => {
    try {
      const savedCars = JSON.parse(localStorage.getItem('highlightedCars')) || [];
      setHighlightedCars(savedCars);
    } catch (error) {
      console.error('Error loading highlighted cars:', error);
    }
  }, []);

  const addCar = (car) => {
    const newHighlightedCars = [...highlightedCars, car];
    setHighlightedCars(newHighlightedCars);
    localStorage.setItem('highlightedCars', JSON.stringify(newHighlightedCars));
  };

  const removeCar = (car) => {
    const newHighlightedCars = highlightedCars.filter(
      (highlighted) => highlighted.model !== car.model
    );
    setHighlightedCars(newHighlightedCars);
    localStorage.setItem('highlightedCars', JSON.stringify(newHighlightedCars));
  };

  return (
    <div>
      <h1>Highlighted Cars</h1>
      <ul>
        {highlightedCars.length > 0 ? (
          highlightedCars.map((car) => (
            <li key={car.model}>
              {car.brand} / {car.model}
              <button onClick={() => removeCar(car)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No highlighted cars</p>
        )}
      </ul>
      {/* Implement functionality for adding new cars */}
    </div>
  );
}

export default HighlightedCars;
