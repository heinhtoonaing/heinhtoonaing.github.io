import React from 'react';
import CarTable from '../components/CarTable.jsx';
import PieChart from '../components/PieChart.jsx';
import StackedBarChart from '../components/StackedBarChart.jsx';
import data from '../utils/data.json';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <CarTable data={data} />
      <PieChart data={data} />
      <StackedBarChart data={data} />
    </div>
  );
};

export default Dashboard;
