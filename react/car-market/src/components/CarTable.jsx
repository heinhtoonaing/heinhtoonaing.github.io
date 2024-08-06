import React from 'react';

const CarTable = ({ data }) => {
  const brands = {};

  data.forEach(car => {
    if (!brands[car.brand]) {
      brands[car.brand] = {};
    }
    if (!brands[car.brand][car.model]) {
      brands[car.brand][car.model] = 0;
    }
    brands[car.brand][car.model] += car.value;
  });

  return (
    <div>
      {Object.keys(brands).map(brand => (
        <div key={brand}>
          <h3>{brand}</h3>
          {Object.keys(brands[brand]).map(model => (
            <p key={model}>{model}: {brands[brand][model]}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CarTable;
