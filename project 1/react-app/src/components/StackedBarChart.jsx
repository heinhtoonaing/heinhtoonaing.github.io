import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

function StackedBarChart({ data }) {
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
      label: 'Number of Cars',
      data: Object.values(brands),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}

export default StackedBarChart;
