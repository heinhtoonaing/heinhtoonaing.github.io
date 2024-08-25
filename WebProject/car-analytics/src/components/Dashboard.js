import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import data from '../assets/data.json';
import CarCard from './CarCard';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [cars, setCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedCars, setHighlightedCars] = useState(() => {
    const saved = localStorage.getItem('highlightedCars');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setCars(data.Cars);
  }, []);

  useEffect(() => {
    localStorage.setItem('highlightedCars', JSON.stringify(highlightedCars));
  }, [highlightedCars]);

  const handleHighlightToggle = (car) => {
    const isHighlighted = highlightedCars.some(highlightedCar => highlightedCar.Cid === car.Cid);

    if (isHighlighted) {
      const updatedCars = highlightedCars.filter(highlightedCar => highlightedCar.Cid !== car.Cid);
      setHighlightedCars(updatedCars);
    } else {
      setHighlightedCars([...highlightedCars, car]);
    }
  };

  const brands = [...new Set(cars.map(car => car.NameMMT.split(' ')[0]))];
  const filteredBrands = brands.filter(brand => brand.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredCars = selectedBrand ? cars.filter(car => car.NameMMT.split(' ')[0] === selectedBrand) : [];

  const carModels = [...new Set(filteredCars.map(car => car.Model))];
  const carCount = carModels.map(model => filteredCars.filter(car => car.Model === model).length);
  const carValues = carModels.map(model => filteredCars.filter(car => car.Model === model).reduce((acc, car) => acc + parseInt(car.Prc.replace(/,/g, '')), 0));

  const pieData = {
    labels: carModels,
    datasets: [
      {
        data: carCount,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
      }
    ]
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search car brand..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="brand-selection">
        {filteredBrands.map((brand, index) => (
          <button
            key={index}
            className={`brand-button ${selectedBrand === brand ? 'selected' : ''}`}
            onClick={() => setSelectedBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>

      {selectedBrand && (
        <>
          <div className="data-table">
            <h3>Data Table</h3>
            <table>
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Count</th>
                  <th>Value (Baht)</th>
                </tr>
              </thead>
              <tbody>
                {carModels.map((model, index) => (
                  <tr key={index}>
                    <td>{selectedBrand}</td>
                    <td>{model}</td>
                    <td>{carCount[index]}</td>
                    <td>{carValues[index].toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="charts">
            <h3>Charts</h3>
            <div className="chart-container">
              <Pie data={pieData} />
            </div>
          </div>

          <div className="car-cards">
            <h3>Car Details</h3>
            {filteredCars.map(car => (
              <CarCard
                key={car.Cid}
                car={car}
                isHighlighted={highlightedCars.some(highlightedCar => highlightedCar.Cid === car.Cid)}
                onHighlightToggle={() => handleHighlightToggle(car)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
