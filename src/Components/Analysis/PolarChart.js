import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarChart = ({ GlobalData }) => {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: GlobalData.PolarChart.labels,
      datasets: [
        {
          data: GlobalData.PolarChart.data,
          backgroundColor: GlobalData.PolarChart.bgcolor,
          hoverOffset: 20,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    });
  }, []);

  return <PolarArea data={chartData} options={chartOptions} />;
};

export default PolarChart;
