import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

function PieChart({ data }) {
  // Check if data is an object with a 'Cars' array
  if (!data || !Array.isArray(data.Cars)) {
    console.error("Expected 'data' to be an object with a 'Cars' array, but got:", data);
    return <div>Error: Invalid data structure</div>;
  }

  const cars = data.Cars;
  const brands = cars.reduce((acc, car) => {
    if (!acc[car.Model]) {
      acc[car.Model] = 0;
    }
    acc[car.Model] += 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(brands),
    datasets: [{
      data: Object.values(brands),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#8E5EA2'],
    }]
  };

  return <Pie data={chartData} />;
}

export default PieChart;
