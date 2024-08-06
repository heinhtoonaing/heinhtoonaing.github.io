import React from 'react';
import { Bar } from 'react-chartjs-2';

const StackedBarChart = ({ data }) => {
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

  const chartData = {
    labels: Object.keys(brands),
    datasets: Object.keys(brands).map(brand => ({
      label: brand,
      data: Object.values(brands[brand]),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }))
  };

  return <Bar data={chartData} />;
};

export default StackedBarChart;
