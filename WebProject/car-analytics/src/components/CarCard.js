import React from 'react';

const CarCard = ({ car, isHighlighted, onHighlightToggle }) => {
  return (
    <div className="car-card">
      <img src={car.Img300} alt={car.Model} />
      <h3>{car.NameMMT}</h3>
      <p>Price: {car.Prc} Baht</p>
      <p>Province: {car.Province}</p>
      <button
        className={isHighlighted ? 'remove-highlight-button' : 'highlight-button'}
        onClick={onHighlightToggle}
      >
        {isHighlighted ? 'Remove Highlight' : 'Highlight'}
      </button>
    </div>
  );
};

export default CarCard;
