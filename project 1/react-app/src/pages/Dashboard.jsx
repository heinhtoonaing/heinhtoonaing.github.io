import React, { useState, useEffect } from 'react';
import carsData from '../data/cars.json'; // Adjust the path as necessary

import PieChart from '../components/PieChart';
import StackedBarChart from '../components/StackedBarChart';
import BrandTable from '../components/BrandTable';

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Directly set the imported JSON data
    setData(carsData);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {data ? (
        <>
          <PieChart data={data} />
          <StackedBarChart data={data} />
          <BrandTable data={data} />
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Dashboard;
