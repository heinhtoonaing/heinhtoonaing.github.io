import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';

const HighlightedCars = () => {
  const [highlightedCars, setHighlightedCars] = useState(() => {
    const saved = localStorage.getItem('highlightedCars');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('highlightedCars', JSON.stringify(highlightedCars));
  }, [highlightedCars]);

  const removeHighlight = (car) => {
    const updatedHighlightedCars = highlightedCars.filter(highlightedCar => highlightedCar.Cid !== car.Cid);
    setHighlightedCars(updatedHighlightedCars);
  };

  const removeAllHighlights = () => {
    setHighlightedCars([]);
    localStorage.removeItem('highlightedCars');
  };

  return (
    <div className="highlighted-cars">
      <h2>Highlighted Cars</h2>
      <button onClick={removeAllHighlights} className="remove-all-button">Remove All Highlights</button>
      <div className="car-cards">
        {highlightedCars.map(car => (
          <CarCard
            key={car.Cid}
            car={car}
            isHighlighted={true}
            onHighlightToggle={() => removeHighlight(car)}
          />
        ))}
      </div>
    </div>
  );
};

export default HighlightedCars;
