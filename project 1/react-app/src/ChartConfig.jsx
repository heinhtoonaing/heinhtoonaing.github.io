// src/ChartConfig.js

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(
  ArcElement, // For Pie chart
  Tooltip,
  Legend,
  CategoryScale, // For Bar chart
  LinearScale,
  BarElement // For Bar chart
);
