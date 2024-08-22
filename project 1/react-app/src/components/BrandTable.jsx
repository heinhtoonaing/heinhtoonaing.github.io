import React from 'react';

function BrandTable({ data }) {
  // Check if data is an object with a 'Cars' array
  if (!data || !Array.isArray(data.Cars)) {
    console.error("Expected 'data' to be an object with a 'Cars' array, but got:", data);
    return <div>Error: Invalid data structure</div>;
  }

  const cars = data.Cars;

  return (
    <table>
      <thead>
        <tr>
          <th>Model</th>
          <th>NameMMT</th>
          <th>Price</th>
          <th>Year</th>
          <th>Page Views</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => (
          <tr key={car.Cid}>
            <td>{car.Model}</td>
            <td>{car.NameMMT}</td>
            <td>{car.Prc}</td>
            <td>{car.Yr}</td>
            <td>{car.PageViews}</td>
            <td><img src={car.Img100} alt={car.Model} width="100" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BrandTable;
