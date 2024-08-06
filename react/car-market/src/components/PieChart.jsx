import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  const brands = {};

  data.forEach(car => {
    if (!brands[car.brand]) {
      brands[car.brand] = 0;
    }
    brands[car.brand] += car.value;
  });

  const chartData = {
    labels: Object.keys(brands),
    datasets: [{
      data: Object.values(brands),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  return <Pie data={chartData} />;
};

export default PieChart;
